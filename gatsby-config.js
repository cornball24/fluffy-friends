/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Fluffy Friends`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-line-breaks`,
    {
      resolve:'gatsby-source-filesystem',
      options:{
        name:'images',
        path:`${__dirname}/src/images`
      }
    }
  ]
};