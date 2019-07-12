module.exports = {
  siteMetadata: {
    title: `Under Construction`,
    description: `Thanks for stopping by! I'm currently revamping my portfolio, check back again soon.`,
    author: `Gianfranco Trotta`,
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
        background_color: `#111111`,
        theme_color: `#111111`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
