import React from "react"
import styled from "styled-components"

const primary = "#f9fd5a"

const List = styled.ul`
  display: flex;
  align-items: baseline;
  list-style: none;
  margin: 0;
`

const Item = styled.li`
  background: ${primary};
  margin-left: 8px;
  font-size: 14px;

  &:first-of-type {
    margin-left: 0;
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
