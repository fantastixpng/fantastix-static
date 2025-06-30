import type { GatsbyConfig } from "gatsby"
import "dotenv/config";

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Fantastix`,
    description: `Building your business`,
    author: `@chrisaugu`,
    siteUrl: `https://www.fantastixpng.xyz/`,
    logo: ""
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "data",
        path: `./src/data`,
      },
    },
    // {
    //   resolve: "gatsby-plugin-react-svg",
    //   options: {
    //     rule: {
    //       // include: /images\/.*\.svg/,
    //       include: /images/
    //     }
    //   }
    // },
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-plugin-sass`,
      // options: {
      //   includePaths: [
      //     "src/scss/bootstrap.scss"
      //   ],
      // }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fantastix`,
        short_name: `fantastix`,
        start_url: `/`,
        background_color: `#000`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `./src/images/logo-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: "gatsby-plugin-sitemap",
    //   options: {
    //     output: `/my-cool-sitemap.xml`,
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: 'https://www.example.com',
    //     sitemap: 'https://www.example.com/sitemap.xml',
    //     policy: [{ userAgent: '*', allow: '/' }],
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-load-script',
    //   options: {
    //     disable: !process.env.SENTRY_DSN, // When do you want to disable it ?
    //     src: 'https://browser.sentry-cdn.com/5.15.4/bundle.min.js',
    //     integrity:
    //       'sha384-Nrg+xiw+qRl3grVrxJtWazjeZmUwoSt0FAVsbthlJ5OMpx0G08bqIq3b/v0hPjhB',
    //     crossorigin: 'anonymous',
    //     onLoad: `() => Sentry.init({dsn:"${process.env.SENTRY_DSN}"})`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `parkinsans:300,400,500,600,700,800,900`,
          `inter:300,400,500,600,700,800,900`
        ],
        display: 'swap'
      }
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `DM Sans`,
    //         variants: [`400`, `500`, `700`],
    //       },
    //       {
    //         family: `Playfair Display`,
    //         variants: [`400`, `500`, `700`],
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: "GTM-NFDSQTK",
    //     // Include GTM in development.
    //     //
    //     // Defaults to false meaning GTM will only be loaded in production.
    //     includeInDevelopment: false,

    //     // datalayer to be set before GTM is loaded
    //     // should be an object or a function that is executed in the browser
    //     //
    //     // Defaults to null
    //     // defaultDataLayer: { platform: "gatsby" },

    //     // // Specify optional GTM environment details.
    //     // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
    //     // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
    //     // dataLayerName: "YOUR_DATA_LAYER_NAME",

    //     // Name of the event that is triggered
    //     // on every Gatsby route change.
    //     //
    //     // Defaults to gatsby-route-change
    //     // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
    //     // Defaults to false
    //     // enableWebVitalsTracking: true,
    //     // Defaults to https://www.googletagmanager.com
    //     // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",

    //     // options: {
    //     //   // datalayer to be set before GTM is loaded
    //     //   // should be a stringified object or object
    //     //   //
    //     //   // Defaults to null
    //     //   defaultDataLayer: function () {
    //     //     return {
    //     //       pageType: window.pageType,
    //     //     }
    //     //   },
    //     // }
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: "UA-212537658-1",
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: false,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     // Delays sending pageview hits on route update (in milliseconds)
    //     pageTransitionDelay: 0,
    //     // Enables Google Optimize using your container Id
    //     // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
    //     // Enables Google Optimize Experiment ID
    //     // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
    //     // Set Variation ID. 0 for original 1,2,3....
    //     // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
    //     // Defers execution of google analytics script after page load
    //     defer: false,
    //     // Any additional optional fields
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     cookieDomain: "fantastixpng.xyz",
    //     // defaults to false
    //     enableWebVitalsTracking: true
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [
    //       "GA-TRACKING_ID", // Google Analytics / GA
    //       "AW-CONVERSION_ID", // Google Ads / Adwords / AW
    //       "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
    //     ],
    //     // This object gets passed directly to the gtag config command
    //     // This config will be shared across all trackingIds
    //     gtagConfig: {
    //       optimize_id: "OPT_CONTAINER_ID",
    //       anonymize_ip: true,
    //       cookie_expires: 0,
    //     },
    //     // This object is used for configuration specific to this plugin
    //     pluginConfig: {
    //       // Puts tracking script in the head instead of the body
    //       head: false,
    //       // Setting this parameter is also optional
    //       respectDNT: true,
    //       // Avoids sending pageview hits from custom paths
    //       exclude: ["/preview/**", "/do-not-track/me/too/"],
    //       // Defaults to https://www.googletagmanager.com
    //       origin: "YOUR_SELF_HOSTED_ORIGIN",
    //     },
    //   },
    // },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-strapi`,
      options: {
        // version: 4,
        apiURL: process.env.STRAPI_API_URL || `http://localhost:1337`,
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: ['article', 'category', 'author', 'user'],
        singleTypes: ['homepage', 'about', 'global'],
        queryLimit: 1000,
      },
    },
    `gatsby-plugin-typegen`
  ],
}

export default config
