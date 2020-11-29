import React, { useEffect, useState } from "react"
import marked from "marked"
import createDOMPurify from "dompurify"

const ConvertHTML = ({ html }) => {
  const [content, setContent] = useState()

  useEffect(() => {
    const DOMPurify = createDOMPurify(window)
    const convertedHTML = html ? DOMPurify.sanitize(marked(html)) : ""
    setContent(convertedHTML)
  }, [html])

  return (
    <>
      <p
        className="markdown-body"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
        itemProp="description"
      />
    </>
  )
}

export default ConvertHTML
