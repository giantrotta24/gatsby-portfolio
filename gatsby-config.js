const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Under Construction`,
    message: `I'm currently revamping my portfolio, check back again soon.`,
    author: `Gianfranco Trotta`,
    titleFont: "Oswald",
    messageFont: "Roboto",
    color: "#e7e6e6",
    social: ["https://github.com/giantrotta24", "https://www.linkedin.com/in/gianfranco-trotta-862a4b155/", "https://twitter.com/FootballKennel"],
    email:"mailto:gian@giantrotta.dev"
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `under-construction`,
        short_name: `construction`,
        start_url: `/`,
        background_color: `#e7e6e6`,
        theme_color: `#e7e6e6`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
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
