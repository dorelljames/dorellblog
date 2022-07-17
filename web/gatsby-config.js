module.exports = {
  siteMetadata: {
    title: `d||ell`,
    author: `@dorelljames`,
    description: `Personal website of Dorell James`,
    siteUrl:
      process.env.NODE_ENV !== "production"
        ? "http://localhost:8000"
        : `https://dorelljames.com`,
    social: {
      twitter: `https://twitter.com/dorelljames`,
      github: `https://github.com/dorelljames`,
      facebook: `https://facebook.com/galangdj`,
    },
    defaultImage: "",
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
              maxWidth: 1024,
              withWebp: true,
              linkImagesToOriginal: false,
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
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {
              margin: 12,
              scrollOffset: 0,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener nofollow",
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-39533448-1", // Google Analytics / GA
          "G-9Y1N7DRP5N",
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl + `/blog` + edge.node.fields.slug,
                  guid:
                    site.siteMetadata.siteUrl + `/blog` + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {categories: {eq: "Web Development"}, draft: {ne: true}}}) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "dorelljames.com's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
            // optional configuration to specify external rss feed, such as feedburner
            // link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
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
      },
    },
    `gatsby-plugin-nprogress`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Varela Round",
              variants: ["400"],
              text: "d|el",
              fontDisplay: "swap",
              strategy: "selfHosted",
            },
          ],
        },
        formats: ["woff2"],
        useMinify: true,
        usePreload: false,
        usePreconnect: true,
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
