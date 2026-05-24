import React, { useState } from "react"
import { Card, Modal, Button } from "react-bootstrap"
import { getImage, getSrc } from "gatsby-plugin-image"

function ModalButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant={"dark"} size={"lg"} onClick={handleShow}>
        Get a free Quote
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
        fullscreen="false">
        <Modal.Header closeButton>
          <Modal.Title>Request a Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          hello
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Prev
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



const ProjectCard = ({ data }) => {
  const myImg = getImage(data.imgSrc)

  const imgSrc = getSrc(data.imgSrc);

  return (
    <a href={data.link}>
      <Card>
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
            <Card.Text className="badge bg-secondary">{data.type?.join(" . ")}</Card.Text>
            <Card.Text>{data.desc}</Card.Text>
            {/* <Card.Text className="badge bg-secondary">{data.stack.join(" . ")}</Card.Text> */}
            <div className="mb-3">
              {data.stack && data.stack.slice(0, 3).map((tag, index) => (
                <span key={index} className="badge bg-secondary me-1 mb-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </a>
  )
}

export default ProjectCard;