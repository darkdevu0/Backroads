/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "BackRoads",
    description: "Explore awesome tours and discover " +
      "what make each of them unique and say yes to adventure",
    author: "@darkdevu0",
    image: "/defaultBcg.jpeg",
    siteUrl: "https://devashishshukla.netlify.app",
    data: {
      name: "Devashish",
      age: 20
    }
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://devashishshukla.netlify.app",
        sitemap: "https://devashishshukla.netlify.app/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "aa6lmvvj10ja",
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "coEg-s-TeNE4MIZnenmUau8zdPNpZZQc5LqeJ9dW6qU"
      }
    }
  ]
}
