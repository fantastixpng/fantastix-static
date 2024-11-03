/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import { Script } from "gatsby"
import * as React from "react"

export const onRenderBody = ({ setHtmlAttributes, setPostBodyComponents }) => {
  setHtmlAttributes({ lang: "en" })

  setPostBodyComponents([
    // <Script type="text/javascript" src="/every-page.js" key="every-page-js" defer></Script>,
    // <Script src="https://unpkg.com/scrollreveal@4.0.9/dist/scrollreveal.js" defer="defer"></Script>,
    // <Script src="https://unpkg.com/jarallax@1/dist/jarallax.min.js" defer="defer"></Script>,
    // <Script src="https://vjs.zencdn.net/7.17.0/video.min.js" defer="defer"></Script>,
    // <Script src="//code.tidio.co/wcdvhmo1vg2mcksqfuflpiunnkpru7ep.js" async></Script>
  ])
}
