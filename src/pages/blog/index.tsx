import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/Layout/BlogLayout";

export default function Homepage() {
    // const query = useStaticQuery(graphql`
    //     query HomepageQuery {
    //         strapiHomepage {
    //             title
    //             heroImage {
    //                 url
    //                 alternativeText
    //             }
    //             sections {
    //                 id
    //                 strapi_id
    //                 heading
    //                 description
    //                 content
    //                 image {
    //                     url
    //                     alternativeText
    //                     localFile {
    //                         publicURL
    //                         childImageSharp {
    //                             gatsbyImageData(width: 800, layout: CONSTRAINED)
    //                         }
    //                     }
    //                 }
    //             }
    //             showCta
    //             ctaLink
    //         }
    //     }
    // `);

    return (
        <Layout>
            <h1>Welcome to the Homepage</h1>
            <p>This is the main page of our application.</p>

            <div className="bg-body-tertiary p-5 rounded">
                <h1>Navbar example</h1>
                <p className="lead">This example is a quick exercise to illustrate how the top-aligned navbar works. As you
                    scroll, this navbar remains in its original position and moves with the rest of the page.
                </p>
                <a className="btn btn-lg btn-primary" href="/docs/5.3/components/navbar" role="button">View navbar docs &raquo;</a>
            </div>
        </Layout>
    );
}