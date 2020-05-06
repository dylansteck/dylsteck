module.exports = {
  siteMetadata: {
    title: `Dylan Steck`,
    description: `Interface designer and developer. High school student. Currently building the future of digital information at Stecknologies.`,
    author: `@dylsteck`,
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
        name: `dylsteck`,
        short_name: `dylsteck`,
        start_url: `/`,
        icon: `src/images/DS_Logo_Styled.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // The top level query type, can be anything you want!
        typeName: "GraphCMS",
        // The field you'll query against, can also be anything you want.
        fieldName: "gcms",
        // Your API endpoint, available from the dashboard and settings window.
        // You can use this endpoint that features US mountains for now.
        url: "https://api-us-east-1.graphcms.com/v2/ck9eh3ylx04uu01xj0kfs6q4i/master",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
