import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ConvertHTML from "../components/convertHTML"
import { getTitleRegExp, getDateRegExp, removeExtension } from "../utils/regExp"

const BlogPostTemplate = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, current, next } = data

  const prevPost = previous.repository.post
  const currentPost = current.repository.post.text
  const nextPost = next.repository.post

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={getTitleRegExp(currentPost)?.toString()} description="" />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <ConvertHTML html={currentPost} />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {prevPost && (
              <Link to={`/${prevPost.oid}`} rel="prev">
                ← {getTitleRegExp(prevPost.text)}
              </Link>
            )}
          </li>
          <li>
            {nextPost && (
              <Link to={`/${nextPost.oid}`} rel="next">
                {getTitleRegExp(nextPost.text)} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: GitHub_GitObjectID
    $previousPostId: GitHub_GitObjectID
    $nextPostId: GitHub_GitObjectID
  ) {
    site {
      siteMetadata {
        title
      }
    }
    current: github {
      repository(name: "TIL", owner: "devgaram") {
        post: object(oid: $id) {
          ... on GitHub_Blob {
            oid
            text
          }
        }
      }
    }
    previous: github {
      repository(name: "TIL", owner: "devgaram") {
        post: object(oid: $previousPostId) {
          ... on GitHub_Blob {
            oid
            text
          }
        }
      }
    }
    next: github {
      repository(name: "TIL", owner: "devgaram") {
        post: object(oid: $nextPostId) {
          ... on GitHub_Blob {
            oid
            text
          }
        }
      }
    }
  }
`
