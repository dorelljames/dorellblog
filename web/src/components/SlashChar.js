import React from "react"

export default function SlashChar({ children }) {
  return (
    <>
      <span style={{ color: `var(--textInteractive)` }}>/</span>
      <span>{children}</span>
      <span style={{ color: `var(--textInteractive)` }}>/</span>
    </>
  )
}
