module.exports = {
  siteMetadata: {
    title: `Navi Marella`,
    description: 'This is my portfolio and Website built using Gatsbyjs',
    author: '@NaviMarella'
  },
  pathPrefix: "/NaviPortfolio",
  plugins: [
    {
     resolve: `gatsby-plugin-google-fonts`,
     options: {
       fonts: [
         `pacifico:400`,
         `raleway:100,400,600,700`,
         'lato: 300,400,500'
       ]
     }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 925,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-47904062-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Navi Marella Portfolio",
        short_name: "Navi Marella",
        start_url: "/",
        background_color: "#292929",
        theme_color: "#405375",
        display: "minimal-ui"
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
          dsn: 'https://23d8e0b792d442d29d0b4344a79ef87d@sentry.io/170806',
      },
    }
  ]
}
