import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Careers from "../components/careers"
import ListTitle from "../components/listTitle"

const careers = [
  {
    company: "수퍼트리",
    position: "프론트엔드 개발자",
    start: "2020.04",
    projects: [
      {
        title: "C2C 마켓 플레이스",
        start: "2020.04",
        end: "",
        description: [
          "서비스 오픈 직전에 합류하여 블록체인 기반의 게임 아이템 거래소인 플레이댑 마켓플레이스를 개발 및 운영의 업무 수행",
          "이미지 압축, 코드 스프리팅 등의 기법으로 사이트 최적화",
        ],
        skills: ["Javascript", "HTML5", "SCSS", "ReactJS"],
      },
      {
        title: "C2C 마켓 플레이스 스토어프론트",
        start: "2020.10",
        end: "2020.11",
        description: [
          "게임 개발사가 마켓 플레이스 내에 입점할 수 있도록 스토어프론트 개발",
          "기획서 기반으로 유저 스토리 작성 주도 및 컴포넌트 기반의 개발 도입",
        ],
        skills: ["Typescript", "ReactJS", "EmotionJS"],
      },
    ],
  },
  {
    company: "와이비엠넷",
    position: "ASP 웹 개발자",
    start: "2017.01",
    end: "2019.04",
    projects: [
      {
        title: "B2C 이러닝 사이트 운영",
        start: "2017.01",
        end: "2019.04",
        description: [
          "YBM 이러닝 웹 사이트 개발 및 운영",
          "이러닝 서비스의 어드민 사이트 개발 및 운영",
        ],
        skills: ["ASP", "MSSQL", "HTML", "CSS", "jQuery"],
      },
    ],
  },
]

const AboutIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="이력서" />
      <Bio />
      <ListTitle>업무 경험</ListTitle>
      <Careers careers={careers} />
    </Layout>
  )
}

export default AboutIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
