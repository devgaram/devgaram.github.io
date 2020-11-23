import React from "react"
import styled from "styled-components"

import Skills from "../components/skills"

const Title = styled.p`
  font-weight: bold;
  margin-bottom: 4px;
`

const Period = styled.p`
  margin-bottom: 8px;
  color: gray;
  font-size: 14px;
`

const List = styled.ul`
  margin-left: 24px;
  list-style: disc;
  font-size: 14px;
`

const Item = styled.li`
  margin-bottom: 4px;
`

const project = ({ project }) => {
  const { title, start, end, description, skills } = project
  return (
    <div>
      <Title>{title}</Title>
      <Period>{`${start} ~ ${end || "진행 중"}`}</Period>
      <List>
        {description?.map(desc => (
          <Item key={desc}>{desc}</Item>
        ))}
        <Item>
          <Skills skills={skills} />
        </Item>
      </List>
    </div>
  )
}

export default project
