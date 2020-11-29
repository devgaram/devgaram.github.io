import React from "react"
import marked from "marked"
import createDOMPurify from "dompurify"

const ConvertHTML = ({ html }) => {
  const DOMPurify = createDOMPurify(window)
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
