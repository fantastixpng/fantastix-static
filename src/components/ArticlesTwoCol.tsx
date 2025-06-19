import React from "react"
import { Col, Row } from "react-bootstrap"
import ArticleCard from "./ArticleCard"

const ArticlesTwoCol = ({ articles }) => {
    const leftArticlesCount = Math.ceil(articles.length / 5)
    const leftArticles = articles.slice(0, leftArticlesCount)
    const rightArticles = articles.slice(leftArticlesCount, articles.length)

    return (
        <Row className="g-2">
            <Col className="g-1">
                {leftArticles.map((article, i) => {
                    return (
                        <ArticleCard article={article} key={`article__${article.id}`} />
                    )
                })}
            </Col>
            <Col className="g-1">
                {rightArticles.map((article, i) => {
                    return (
                        <ArticleCard article={article} key={`article__${article.id}`} />
                    )
                })}
            </Col>
        </Row>
    )
}

export default ArticlesTwoCol;