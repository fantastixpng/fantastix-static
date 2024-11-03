import React, {useState} from "react"
import PropTypes from "prop-types"
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



const ProjectCard = ({data}) => {
  const myImg = getImage(data.imgSrc)

  const imgSrc = getSrc(data.imgSrc);

  return (
    <a href={data.link}>
    <Card>
      <Card.Img src={data.imgSrc} />
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
          <Card.Text className="text-white text-small">{data.stack.join(" . ")}</Card.Text>
          <Card.Text>{data.desc}</Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
    </a>
  )
}

ProjectCard.propType = {
  data: PropTypes.string.isRequired
}

export default ProjectCard