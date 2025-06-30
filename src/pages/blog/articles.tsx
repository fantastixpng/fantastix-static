import React from "react"
import { graphql, HeadFC } from "gatsby"
import { Badge, Col, Container, Row } from "react-bootstrap"
import ArticleCard from "../../components/ArticleCard"
import Layout from "../../components/Layout/BlogLayout"
import ArticlesTwoCol from "../../components/ArticlesTwoCol"

export const Head: HeadFC = () => <title>Articles | Fantastix</title>

const ArticlesPage = ({ data }) => {
  const articles = data.allStrapiArticle.nodes;

  return (
    <Layout>
      <section className="bg-light text-dark">
        <Container>
          <Row className="justify-content-center mb-10">
            <div className="col-xl-8 col-lg-9 text-center">
              <h5 className="display-5 mx-xl-10">Articles</h5>
              <p className="lead">
                Recent Articles
              </p>
              <Badge>Categories</Badge>
              <Badge>Authors</Badge>
            </div>
          </Row>

          <Row className="row-cols-3 g-2 text-center">
            {articles.map(article => (
              <ArticleCard key={`article__${article.id}`} article={article} />
            ))}
          </Row>
        </Container>
        
        <Container>
          <Row className="justify-content-center mb-10">
            <div className="col-xl-8 col-lg-9 text-center">
              <h5 className="display-5 mx-xl-10">Articles</h5>
              <p className="lead">
                Industries we operate in
              </p>
            </div>
          </Row>

          <ArticlesTwoCol articles={data.allStrapiArticle.nodes} />
        </Container>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ArticlesQuery {
    allStrapiArticle {
      nodes {
        id
        strapi_id
        title
        content
        slug
        cover {
          url
          alternativeText
          localFile {
            absolutePath
            publicURL
            url
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
        category {
          name
          slug
          parent {
            id
          }
        }
        author {
          id
          strapi_id
          name
          email
          avatar {
            id
            url
            alternativeText
            localFile {
              absolutePath
              publicURL
              url
              childImageSharp {
                gatsbyImageData(width: 40)
              }
            }
          }
        }
        publishedAt
        createdAt
        updatedAt
      }
    }
  }
`

export default ArticlesPage