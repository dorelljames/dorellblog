import React from "react"

export function formatReadingTime(minutes) {
  let cups = Math.round(minutes / 5)
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill("🍱")
      .join("")} ${minutes} min read`
  } else {
    return `${new Array(cups || 1).fill("☕️").join("")} ${minutes} min read`
  }
}

export function isPathBlogPost(path) {
  return new RegExp(/^\/blog\//).test(path)
}

export const blockContentSerializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
}
