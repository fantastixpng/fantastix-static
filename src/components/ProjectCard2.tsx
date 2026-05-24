import React from "react";
import { Card, Button } from "react-bootstrap"
import { getImage, getSrc } from "gatsby-plugin-image"

const ProjectCard = ({ data, onClick }) => {
  const myImg = getImage(data.imgSrc)

  const imgSrc = getSrc(data.imgSrc);

  return (
    <>
      <Card
        className="hover-shadow transition-all"
        style={{ cursor: 'pointer' }}
        onClick={() => onClick(data)}
      >
        <Card.Img src={data.imgSrc} className="" />
        {/*<StaticImage
        className="card-img-top"
        src={imgSrc}
        placeholder="blurred"
        layout="fixed"
        alt={data.name}
        formats={["auto", "webp", "avif"]}
      />*/}

        {/*<Image src="../images/icons/react-icon.svg" alt="d"/>*/}
        {/*<GatsbyImage image={myImg} alt={data.name} />*/}

        <Card.ImgOverlay>
          <div className="bottom">
            <Card.Title>{data.name}</Card.Title>
            {/* <div className="d-flex justify-content-between align-items-start mb-3">
              <Card.Title>{data.name}</Card.Title>
              <span className="badge bg-primary">{data.timeline?.status || 'Active'}</span>
            </div> */}
            {/* <Card.Text className="text-white text-small">{data.technologies.join(" . ")}</Card.Text> */}
            {/* <Card.Text>{data.problem}</Card.Text> */}
            {/* <Card.Text className="badge bg-secondary">{data.tags.join(" . ")}</Card.Text> */}
            {/* <Card.Text className="text-muted" style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
              {data.customerRequirements}
            </Card.Text> */}
            <div className="mb-3">
              {data.tags && data.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="badge bg-secondary me-1 mb-1">
                  {tag}
                </span>
              ))}
            </div>


            {/* <div className="mt-3">
              <small className="text-muted">
                <strong>Technologies:</strong> {data.technologies?.slice(0, 3).join(', ')}...
              </small>
            </div> */}
          </div>
        </Card.ImgOverlay>

        {/* <Card.Footer className="bg-transparent border-top-0">
          <Button
            variant="outline-primary"
            size="sm"
            className="w-100"
            onClick={() => onClick(data)}
          >
            View Project Details
          </Button>
        </Card.Footer> */}
      </Card>
    </>
  )
}

export default ProjectCard;