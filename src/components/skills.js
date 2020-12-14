import React from "react"
import styled from "styled-components"

const primary = "#f9fd5a"

const List = styled.ul`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 12px;
`

const Item = styled.li`
  background: ${primary};
  margin: 0 8px 8px 0;
  font-size: 14px;

  &:last-of-type {
    margin-right: 0;
  }
`

const skills = ({ skills }) => {
  if (!skills) return null

  return (
    <List>
      {skills?.map(skill => (
        <Item key={skill}>{skill}</Item>
      ))}
    </List>
  )
}

export default skills
