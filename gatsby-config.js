module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `GLI Norcal Landscape Construction`,
    description: `Purveyors of Fine Crafted Landscapes in Marin and the SF Bay Area.`,
    author: `thoughtfulMonkey`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gli-norcal-landscape-construction`,
        short_name: `gli-norcal`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#798d64`,
        display: `minimal-ui`,
        icon: `src/images/favicon/glinorcal.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
