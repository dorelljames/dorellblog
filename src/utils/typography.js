import Typography from "typography"
import CodePlugin from "typography-plugin-code"
import theme from "typography-theme-lincoln"

theme.plugins = [new CodePlugin()]

theme.overrideThemeStyles = () => {
  return {
    "a,a:hover": {
      textShadow: `none`,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
      textDecoration: `none`,
      backgroundImage: `none`,
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
