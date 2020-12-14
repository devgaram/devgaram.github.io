import React from "react"
import { graphql } from "gatsby"

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
        site: "https://market.playdapp.com/",
        start: "2020.04",
        end: "",
        description: [
          "서비스 오픈 직전에 합류하여 블록체인 기반의 게임 아이템 거래소인 플레이댑 마켓플레이스를 개발 및 운영 업무 수행",
          "PR 템플릿 도입 및 린트 체크 자동화를 통한 코드 리뷰 환경 구성",
          "시멘틱한 마크업과 BEM 방법론을 적용하여 반응형 페이지 개발",
          "JWT를 이용한 API Security 작업 진행",
          "사이트 최적화를 위해 깃 훅과 gulp를 이용한 이미지 압축 진행 및 코드스플리팅 적용",
          "컴포넌트에 중복되는 로직을 커스텀 훅으로 분리하며 리팩토링 진행",
          "블록체인 서비스에 대한 기본적 이해도 향상",
        ],
        skills: [
          "reactJS",
          "redux",
          "redux-thunk",
          "Javascript",
          "HTML5",
          "SCSS",
          "react-bootstrap",
          "Algolia",
          "web3.js",
        ],
      },
      {
        title: "C2C 마켓 플레이스 스토어프론트",
        start: "2020.10",
        end: "2020.11",
        description: [
          "게임 개발사가 마켓 플레이스 내에 입점할 수 있도록 스토어프론트 개발",
          "기획서 기반으로 유저 스토리 작성 주도 및 컴포넌트 기반의 개발 도입",
          "react-bootstrap 없이 Button 부터 한땀 한땀 재사용 가능한 컴포넌트 개발",
        ],
        skills: [
          "Typescript",
          "reactJS",
          "redux",
          "redux-thunk",
          "emotionJS",
          "react-hook-form",
        ],
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
        title: "YBM 이러닝 B2C 사이트 개발 및 운영",
        site: "http://toeic.ybmclass.com/",
        start: "2017.01",
        end: "2019.04",
        description: [
          "프로모션 페이지 개발: 퍼블리싱 및 개발 ( 프로모션 참여 모듈, 댓글 및 공유 게시판, 자주 변경되는 부분 관리자 단에서 조정가능하도록 기능 추가 )",
          "CS 자주 들어오는 건 원인 찾아 기능 개선",
        ],
        skills: ["ASP", "MSSQL", "HTML", "CSS", "jQuery", "Jenkins", "Redmine"],
      },
      {
        title: "YBM 이러닝 어드민 사이트 개발 및 운영",
        site: "http://toeic.ybmclass.com/",
        start: "2017.01",
        end: "2019.04",
        description: [
          "마케팅 자료 제공을 위한 통계 정보 추출 작업",
          "프로시저 속도 개선, html 파일 자동 생성 기능 추가(요점정리 카드 URL 자동 생성 기능 추가)",
          "자주 요청되는 건에 대한 자동화",
          "b2c에서 노출되는 데이터 관리자에서 조정할 수 있도록 기능 추가",
          "ISMS 관련 개발 처리(동일 ID 동시 접속 불가능, 외부 IP OTP 절차 후 로그인, 엑셀 다운로드 기능은 망분리 PC 에서만, 각 메뉴 접속로그, 마스킹처리)",
        ],
        skills: ["ASP", "MSSQL", "HTML", "CSS", "jQuery", "Jenkins", "Redmine"],
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
