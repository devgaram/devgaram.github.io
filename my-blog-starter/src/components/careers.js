import React from "react"
import styled from "styled-components"

import Flexbox from "../components/flexbox"
import Project from "../components/project"

const primary = "#cdd9e6"

const Career = styled.li`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid ${primary};
  border-radius: 16px;
`

const Company = styled.h3`
  margin: 0 0 16px;
`

const Position = styled.p`
  margin-left: 8px;
`

const ProjectContainer = styled.div`
  margin-top: 8px;
`

const ProjectList = styled.ul`
  margin-top: 8px;
  list-style: none;
`

const Label = styled.span`
  padding: 2px 8px;
  border: 1px solid #b4caf3;
  border-radius: 4px;
  background: #e5ecf9;
  font-size: 14px;
`

const Careers = ({ careers }) => {
  return (
    <ul>
      {careers?.map(({ company, position, start, end, projects }) => (
        <Career key={company}>
          <Flexbox justifyContent="space-between" flexWrap="wrap">
            <Flexbox alignItems="baseline">
              <Company>{company}</Company>
              <Position>{position}</Position>
            </Flexbox>
            <p>{`${start} ~ ${end || "재직 중"}`}</p>
          </Flexbox>
          <ProjectContainer>
            <Label>프로젝트</Label>
            <ProjectList>
              {projects?.map(project => (
                <li key={project.title}>
                  <Project project={project} />
                </li>
              ))}
            </ProjectList>
          </ProjectContainer>
        </Career>
      ))}
    </ul>
  )
}

export default Careers
