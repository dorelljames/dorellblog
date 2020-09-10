require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const blogQuery = `
  {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          objectID: id
          fields {
            slug
          }
          excerpt
          rawMarkdownBody
          frontmatter {
            title
            categories
          }
        }
      }
    }
  }
  `;

const queries = [
  {
    query: blogQuery,
    transformer: ({ data }) =>
      data.allMarkdownRemark.edges.map(({ node }) => node), // optional
    indexName: process.env.ALGOLIA_INDEX_NAME || "siteData", // overrides main index name, optional
  },
];

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
    `gatsby-plugin-styled-components`,
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
    {
      // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
        // Tip: use Search API key with GATSBY_ prefix to access the service from within components
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries: require("./src/utils/algolia-queries"),
        chunkSize: 10000, // default: 1000
        settings: {
          // optional, any index settings
        },
        enablePartialUpdates: false, // default: false
        // matchFields: ["slug", "modified"], // Array<String> default: ['modified']
      },
    },
    `gatsby-plugin-offline`,
    // {
    //   resolve: "gatsby-plugin-html2amp",
    //   options: {
    //     files: ["blog/**", "index.html", "about.html", "projects.html"],
    //     dist: "public/amp",
    //   },
    // },
  ],
};
