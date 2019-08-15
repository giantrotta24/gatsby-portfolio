const path = require('path');
const config = require('./config');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    author: config.author,
    social: 'https://github.com/giantrotta24',
    color: config.manifestColor,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: config.manifestColor,
        theme_color: config.manifestColor,
        display: `standalone`,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/svg/,
          include: path.resolve(__dirname, 'src/assets/svg'),
          include: /assets(\/|\\)svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ]
}
