module.exports = {
  siteMetadata: {
    title: `d||rell`,
    author: `Dorell James`,
    description: `Personal website of Dorell James.`,
    siteUrl: `https://dorelljames.com/`,
    social: {
      twitter: `https://twitter.com/dorelljames`,
      github: `https://github.com/dorelljames`,
      facebook: `https://facebook.com/galangdj`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: "@weknow/gatsby-remark-twitter",
            options: {
              hideThread: false,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-39533448-1`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dorell's Personal Website`,
        short_name: `d||ell`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#794bc4`,
        display: `minimal-ui`,
        icon: `content/assets/logo-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.js`),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `6851dj4d`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",

        overlayDrafts: true,
        watchMode: true,
      },
    },
    // {
    //   resolve: "gatsby-plugin-html2amp",
    //   options: {
    //     files: ["blog/**", "index.html", "about.html", "projects.html"],
    //     dist: "public/amp",
    //   },
    // },
  ],
}
