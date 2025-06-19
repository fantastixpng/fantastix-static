/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from 'react'
import { useStaticQuery, graphql, Script } from "gatsby"
import PropTypes from "prop-types"
import config from '../../config/website'
import { useSiteMetadata } from '../hooks/use-site-metadata';
// import { Helmet } from "react-helmet";

type SeoProps = {
  description?: string;
  lang?: string;
  meta?: string;
  title?: string;
}

// const WpSeo = ({ description, lang, meta, title }) => {
//   const { wp, wpUser } = useStaticQuery(
//     graphql`
//       query {
//         wp {
//           generalSettings {
//             title
//             description
//           }
//         }

//         # if there's more than one user this would need to be filtered to the main user
//         wpUser {
//           twitter: name
//         }
//       }
//     `
//   )

//   const metaDescription = description || wp.generalSettings?.description
//   const defaultTitle = wp.generalSettings?.title

//   return (
//     <Helmet
//       htmlAttributes={{
//         lang,
//       }}
//       title={title}
//       titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
//       meta={[
//         {
//           name: `description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:title`,
//           content: title,
//         },
//         {
//           property: `og:description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:type`,
//           content: `website`,
//         },
//         {
//           name: `twitter:card`,
//           content: `summary`,
//         },
//         {
//           name: `twitter:creator`,
//           content: wpUser?.twitter || ``,
//         },
//         {
//           name: `twitter:title`,
//           content: title,
//         },
//         {
//           name: `twitter:description`,
//           content: metaDescription,
//         },
//       ].concat(meta)}
//     />
//   )
// }

const Seo = ({ description, lang, meta, title }: SeoProps) => {
  // const query = graphql`
  //   query {
  //     strapiGlobal {
  //       siteName
  //       favicon {
  //         url
  //       }
  //       defaultSeo {
  //         metaTitle
  //         metaDescription
  //         shareImage {
  //           url
  //         }
  //       }
  //     }
  //   }
  // `;
  // const { strapiGlobal } = useStaticQuery(query);
  // const { defaultSeo, siteName, favicon } = strapiGlobal;

  // const title = config.siteTitle
  // const description = config.siteDescription
  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
  const image = config.siteUrl + realPrefix + config.siteLogo
  const blogURL = config.siteUrl + config.pathPrefix
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ]

  const site = useSiteMetadata();

  const metaDescription = description || site.description
  const defaultTitle = site?.title

  return (
    <>
      {/*<Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata?.author || ``,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(meta)}
      /> */}
      {/* <head> */}
      <html lang={config.siteLanguage} />
      <title>{`${title} | Fantastix`}</title>
      <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="shortcut icon" href="favicon.ico" />
      <meta name="msapplication-TileColor" content={config.backgroundColor} />
      <meta name="msapplication-config" content="browserconfig.xml" />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <Script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</Script>
      <meta property="og:locale" content={config.ogLanguage} />
      <meta property="og:site_name" content={config.ogSiteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={config.siteFBAppID ? config.siteFBAppID : ''} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ''} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* </head> */}
    </>
  )
}

export default Seo