const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const removeExtension = filename => {
  return /.+(?=\.)/g.exec(filename)
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        github {
          repository(name: "TIL", owner: "devgaram") {
            categories: object(expression: "master:") {
              ... on GitHub_Tree {
                entries {
                  name
                  type
                  posts: object {
                    ... on GitHub_Tree {
                      entries {
                        name
                        oid
                        content: object {
                          ... on GitHub_Blob {
                            text
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.github

  const sortedPosts = posts.repository.categories.entries
    .map(({ type, name: category, posts }) => {
      if (type !== "tree") return []

      return posts.entries
        .filter(({ name }) => name !== "images")
        .map(({ name, oid, content }) => {
          return { category, name, oid, content }
        })
    })
    .flat()
    .sort((a, b) => {
      const aTime = new Date(a.name.substring(0, 10)).getTime()
      const bTime = new Date(b.name.substring(0, 10)).getTime()

      if (aTime > bTime) return -1
      if (aTime < bTime) return 1
      return 0
    })

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (sortedPosts.length > 0) {
    sortedPosts.forEach(({ category, name, oid, content }, index) => {
      const previousPostId = index === 0 ? null : sortedPosts[index - 1].oid
      const nextPostId =
        index === sortedPosts.length - 1 ? null : sortedPosts[index + 1].oid

      createPage({
        path: oid,
        component: blogPost,
        context: {
          id: oid,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
