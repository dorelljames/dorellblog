import Typography from "typography"
import CodePlugin from "typography-plugin-code"
import theme from "typography-theme-lincoln"
import "./global.css"

theme.plugins = [new CodePlugin()]

theme.overrideThemeStyles = () => {
  return {
    body: {
      color: `var(--textSecondary)`,
    },
    "a,a:hover": {
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
    },
    blockquote: {
      borderLeftColor: `var(--textInteractive)`,
    },
    "p, li, code, label": {
      color: `var(--textNormal)`,
    },
    "tt, code": {
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
  }
}

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
