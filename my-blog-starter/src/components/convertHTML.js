import React from "react"
import marked from "marked"
import createDOMPurify from "dompurify"

const ConvertHTML = ({ html, maxLength }) => {
  const DOMPurify = createDOMPurify(window)
  const convertedHTML = html
    ? DOMPurify.sanitize(marked(html).substr(0, maxLength))
    : ""

  return (
    <>
      <p
        dangerouslySetInnerHTML={{
          __html: convertedHTML,
        }}
        itemProp="description"
      />
    </>
  )
}

export default ConvertHTML
