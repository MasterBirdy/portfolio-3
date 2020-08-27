module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `A spectacular portfolio website for Matthew Ito!`,
    author: `Matthew Ito`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/src/projects`,
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "posts",
    //     path: `${__dirname}/src/posts`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `matthew-ito-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/favicon-16x16.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
