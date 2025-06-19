import React from "react"
import { Link } from "gatsby"
import { Badge, Card, CardBody, CardHeader, CardImg, CardLink, CardSubtitle, CardText, CardTitle } from "react-bootstrap"

const ArticleCard = ({ article }) => {
    const handleClick = () => {
        window.location.href = `/blog/articles/${article.slug}`;
    };
    return (
        <>
            <Card onClick={handleClick}>
                <CardHeader>
                    <CardImg
                        src={article.cover.localFile.url}
                        alt={article.cover.url}
                    />
                </CardHeader>
                <CardBody>
                    <CardText><Badge as={Link} to={`/blog/category/${article.category.slug}`}>{article.category.name}</Badge></CardText>
                    <CardTitle>{article.title}</CardTitle>
                    {article.subtitle && <CardSubtitle>{article.subtitle}</CardSubtitle>}
                    <CardText>{article.content.substring(0, 100)}...</CardText>
                    <CardText className="text-muted">
                        <small>By {article.author.name} on {new Date(article.publishedAt).toLocaleDateString()}</small>
                    </CardText>
                    
                </CardBody>
            </Card>
        </>
    )
}

export default ArticleCard;