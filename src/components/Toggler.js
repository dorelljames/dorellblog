import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class LightDarkModeToggler extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label style={{ display: `flex`, marginLeft: `28px` }}>
            <input
              type="checkbox"
              onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
              style={{ visibility: `hidden` }}
            />{" "}
            <div id="sun-moon" />
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default LightDarkModeToggler
