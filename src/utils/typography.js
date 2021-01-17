import Typography from "typography"
import theme from "typography-theme-sutro"

import "./global.css"

theme.overrideThemeStyles = () => {
  return {
    body: {
      color: `var(--textNormal)`,
    },
    "a,a:hover": {
      fontWeight: `700`,
      textShadow: `none`,
      color: `var(--textInteractive)`,
      backgroundImage: `var(--textInteractive)`,
    },
    "a:hover": {
      textDecoration: `underline`,
      color: `var(--textInteractiveHover)`,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
      textDecoration: `none`,
      backgroundImage: `none`,
    },
    "h1, h2, h3, h4, h5, h6": {
      color: `var(--textPrimary)`,
      border: `0`,
    },
    "h1 a, h2 a, h3 a, h4 a, h5 a, h6 a": {
      color: `var(--textPrimary)`,
      border: `0`,
    },
    "h1 a:hover, h2 a:hover, h3 a:hover, h4 a:hover, h5 a:hover, h6 a:hover": {
      color: `var(--textInteractive)`,
      border: `0`,
      textDecoration: `none`,
    },
    blockquote: {
      borderLeftColor: `var(--textInteractive)`,
    },
    "p, li, label": {
      color: `var(--textNormal)`,
    },
    tt: {
      backgroundColor: `var(--bgSecondary)`,
    },
    "small,em": {
      color: `var(--textSecondary)`,
    },
    'a.anchor svg[aria-hidden="true"]': {
      stroke: `var(--textInteractive)`,
    },
    hr: {
      background: `var(--hr)`,
    },
    "ul, ol": {
      paddingLeft: typography.rhythm(0.5),
    },
  }
}

delete theme.googleFonts

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
