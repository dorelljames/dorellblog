import Typography from "typography"
import gray from "gray-percentage"
import {
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from "typography-breakpoint-constants"
// import theme from "typography-theme-sutro"

import "./global.css"

const theme = {
  title: "CustomTheme",
  baseFontSize: "20px",
  headerFontFamily: ["Elena", "Open Sans", "sans-serif"],
  bodyFontFamily: ["Elena", "Merriweather", "Georgia", "serif"],
  bodyColor: "hsla(0,0%,0%,0.9)",
  headerWeight: 700,
  bodyWeight: 300,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      color: "#f92300",
      textDecoration: "none",
    },
    "a:hover,a:active": {
      textDecoration: "underline",
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      fontStyle: "italic",
      paddingLeft: rhythm(13 / 16),
      marginLeft: 0,
      borderLeft: `${rhythm(3 / 16)} solid ${gray(80)}`,
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    "blockquote cite:before": {
      content: '"— "',
    },
    ul: {
      listStyle: "disc",
    },
    "ul,ol": {
      marginLeft: 0,
    },
    [MOBILE_MEDIA_QUERY]: {
      "ul,ol": {
        marginLeft: rhythm(1),
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
    [TABLET_MEDIA_QUERY]: {
      h1: {
        ...scale(5 / 5),
      },
    },
    "h1,h2,h3,h4,h5,h6": {
      marginTop: rhythm(2),
    },
    h1: {
      ...scale(6 / 5),
    },
    h6: {
      fontStyle: "italic",
    },
  }),
}

theme.overrideThemeStyles = () => {
  return {
    body: {
      color: `var(--textNormal)`,
    },
    a: {
      fontFamily: `Mija`,
      fontWeight: 700,
      textShadow: `none`,
      color: `var(--textInteractive)`,
      backgroundImage: `var(--textInteractive)`,
    },
    "a:hover": {
      textDecoration: `underline`,
      color: `var(--textInteractiveHover)`,
      animation: `bounce 0.9s infinite`,
      transform: `translateY(-3px)`,
    },
    "a:after": {
      position: "relative",
      zIndex: 1,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
      textDecoration: `none`,
      backgroundImage: `none`,
    },
    h1: {
      fontFamily: `Mija`,
    },
    "h1, h2, h3, h4, h5, h6": {
      color: `var(--textPrimary)`,
      border: `0`,
      fontWeight: 700,
    },
    "h1 a, h2 a, h3 a, h4 a, h5 a, h6 a": {
      color: `var(--textPrimary)`,
      border: `0`,
      fontWeight: 700,
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
    small: {
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

delete theme.googleFonts

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
