import React from "react"
import { Link, StaticQuery, graphql, useStaticQuery } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata";

const Nav = () => {
    const siteMetadata = useSiteMetadata();
    const data = useStaticQuery(graphql`
        query {
            allStrapiCategory {
                edges {
                    node {
                        strapi_id
                        name
                        slug
                    }
                }
            }
        }
    `);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    const canonicalUrl = siteMetadata.siteUrl + location?.pathname

    const renderNavLinks = () => {
        return navLinks.map((link, index) => (
            <li className="nav-item" key={index}>
                <Link to={link.path} className="nav-link">
                    {link.name}
                </Link>
            </li>
        ));
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/">Fantastix | </Link><Link to="/blog">Blog</Link>
                </div>

                <button className="navbar-toggler"
                    type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto justify-content-end flex-grow-1 pe-3">
                        {data.allStrapiCategory.edges.map((category, i) => {
                            return (
                                <li className="nav-item" key={category.node.strapi_id}>
                                    <Link to={`/blog/category/${category.node.slug}`} className="nav-link">
                                        {category.node.name}
                                    </Link>
                                </li>
                            )
                        })}

                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Nav  