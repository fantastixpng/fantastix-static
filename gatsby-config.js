module.exports = {
  siteMetadata: {
    title: `Fantastix`,
    description: `Building your business`,
    author: `@chrisaugu`,
    siteUrl: `https://www.fantastixpng.xyz/`,
    hello: "world"
  },
  plugins: [
    // `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sass`,
      // options: {
      //   includePaths: ["src/scss/bootstrap"],
      // }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `fantastix`,
        short_name: `fantastix`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#663399`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins:300,400,500,600,700,800,900`
        ],
        display: 'swap'
      }
    },
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
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "YOUR_GOOGLE_TAGMANAGER_ID",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",

        // options: {
        //   // datalayer to be set before GTM is loaded
        //   // should be a stringified object or object
        //   //
        //   // Defaults to null
        //   defaultDataLayer: function () {
        //     return {
        //       pageType: window.pageType,
        //     }
        //   },
        // }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
        // defaults to false
        enableWebVitalsTracking: true,
      },
    },
  ]
}
