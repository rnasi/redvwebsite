/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `RedV`,
    author: {
      name: `RedV`,
    },
    description: `Website for RedV, DGS-1's local software development team`,

    /* Choose and arrange the sections to be displayed on the landing page */
    sections: [
      `hero`,
      `features`,
      `screenshots`,
      `testimonials`,
      `call-to-action`
    ],

    /* Configure the navigation menu */
    menuItems: [
      {path: 'features', label: 'Our Apps'},
      {path: 'screenshots', label: 'Screenshots'},
      {path: 'call-to-action', label: 'Contact Us'},
    ],

    /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
    social: [
      { service: `Facebook`,
        url : `https://www.facebook.com/497ISRG`,
        fa: `facebook` },
      // { service: `Twitter`,
      //   url : `https://twitter.com/styleshout`,
      //   fa: `twitter` },
      { service: `GitLab`,
        url : `https://gitlab.devops.geointservices.io/dgs1sdt/`,
        fa: `gitlab` },
    ],

    /* Path to favicon and logo (located inside the 'static' folder) */
    favicon: `favicon.png`,
    logo: `/images/logo.png`,

    /* Logo and text to show in footer */
    footer: {
      logo: ``,
      text: ``,
    },

    /* Address and contact info to show in footer */
    address: {
      line1: ``,
      line2: ``,
      line3: ``,
    },
    contacts: [
      { text: ``, url: `` },
      { text: ``, url: ``},
      { text: ``, url: ``},
    ],
  },
  plugins: [ `gatsby-plugin-anchor-links`, `gatsby-plugin-smoothscroll`, `react-scrollspy` ],
}
