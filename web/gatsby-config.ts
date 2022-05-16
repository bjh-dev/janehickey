import type { GatsbyConfig } from 'gatsby';
import * as dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jane Hickey | Academic and Disability Advocate`,
    siteUrl: `https://www.janehickey.com`,
  },
  plugins: [
    `gatsby-plugin-remove-console`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
      // __key: 'images',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jane Hickey is an academic at Victoria University with research areas in disability, youth work, inclusive education and accessible employment`,
        short_name: `Bryan Hickey`,
        start_url: `/`,
        background_color: `#cbd5e1`,
        theme_color: `#ef4444`,
        display: `standalone`,
        icon: `./src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        // transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,
        includeInDevelopment: false,
      },
    },
  ],
};

export default config;
