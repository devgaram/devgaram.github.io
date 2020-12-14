/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
            gmail
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <div>
          <p>
            안녕하세요, <strong>{author.name}</strong> 입니다.&nbsp;
            {author?.summary || null}
            &nbsp;
          </p>
          <div>
            <Link to="/about">
              <span role="img" aria-label="resume">
                👉
              </span>
              이력서
            </Link>
            &nbsp;|&nbsp;
            <a href={`https://twitter.com/${social?.twitter || ``}`}>
              <span role="img" aria-label="twitter">
                👉
              </span>
              트위터
            </a>
            &nbsp;|&nbsp;
            <a href={`https://github.com/${social?.github || ``}`}>
              <span role="img" aria-label="github">
                👉
              </span>
              깃허브
            </a>
            &nbsp;|&nbsp;
            <a href={`mailto:${social?.gmail || ``}@gmail.com`}>
              <span role="img" aria-label="gmail">
                👉
              </span>
              지메일
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Bio
