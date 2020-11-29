import React from "react"
import marked from "marked"
import DOMPurify from "dompurify"

const ConvertHTML = ({ html }) => {
  const convertedHTML = html ? DOMPurify.sanitize(marked(html)) : ""

  return (
    <>
      <p
        className="markdown-body"
        dangerouslySetInnerHTML={{
          __html: convertedHTML,
        }}
        itemProp="description"
      />
    </>
  )
}

export default ConvertHTML
