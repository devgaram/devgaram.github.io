import React from "react"
import styled from "styled-components"

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || "row"};
  justify-content: ${props => props.justifyContent || "start"};
  align-items: ${props => props.alignItems || "normal"};
  flex-wrap: ${props => props.flexWrap || "nowrap"};
`

const flexbox = ({
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
  children,
}) => {
  return (
    <Flex
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexWrap={flexWrap}
    >
      {children}
    </Flex>
  )
}

export default flexbox
