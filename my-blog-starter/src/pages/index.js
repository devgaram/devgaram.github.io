import React, { useMemo } from "react"
import { Link, graphql } from "gatsby"
import { gql, useQuery } from "@apollo/client"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ConvertHTML from "../components/convertHTML"
import { getTitleRegExp, getDateRegExp } from "../utils/regExp"

const GET_ALL_POST = gql`
  {
    repository(name: "TIL", owner: "devgaram") {
      categories: object(expression: "master:") {
        ... on Tree {
          entries {
            name
            type
            posts: object {
              ... on Tree {
                entries {
                  name
                  oid
                  content: object {
                    ... on Blob {
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
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { loading, error, data: posts } = useQuery(GET_ALL_POST)

  const sortedPosts = useMemo(() => {
    if (!posts) return []

    return posts.repository.categories.entries
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
  }, [posts])

  if (error) return null

  if (sortedPosts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>엇 글 로딩에 실패했나봐요..!..</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {sortedPosts.map(({ category, name, oid, content }) => {
          return (
            <li key={oid}>
              <article className="post-list-item">
                <header>
                  <h2>
                    <Link to={`${category}/${name}`} itemProp="url">
                      <span itemProp="headline">
                        {getTitleRegExp(content.text)}
                      </span>
                    </Link>
                  </h2>
                  <small>{getDateRegExp(content.text)}</small>
                </header>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
