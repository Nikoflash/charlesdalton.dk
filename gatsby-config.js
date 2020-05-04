/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: '@import "src/assets/styles/global.scss";',
        includePaths: [
          'src/components',
        ],
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Charles Dalton Coach`,
        icon: `src/assets/images/favicon.png`
      },
    },
  ]
}
