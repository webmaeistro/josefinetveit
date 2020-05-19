module.exports = {
  siteMetadata: {
    title: `MakeupFx Portfolio for JoseFine Tveit`,
    name: `JosefineTveit`,
    siteUrl: `https://josefinetveit.netlify.app`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Josefine Tveit Makeup Artist`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/josefinetveit`
      },
      {
        name: `github`,
        url: `https://github.com/josefinetveit`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/josefinetveit.co`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/josefinetveit/`
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`
      }
    ]
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Josefine Tveit's makeupFx portfolio`,
        short_name: `Josefine-makeup`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {}
    }
  ]
};
