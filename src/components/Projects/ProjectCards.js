import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProjectCards(product) {
  const navigate =useNavigate()
  const { title, image, description, Front, Back, Web, id } = product.project;
  console.log(" props.product", product);
  return (
    <Col md={4} className="project-card">
      <Card className="project-card-view">
        <Card.Img variant="top" src={image} alt="card-img" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
          <Button
            variant="primary"
            onClick={()=>navigate(`/project/${id}`)}
            className="mt-2 mx-1"
          >
            <BiLinkExternal /> &nbsp;
            {" View Project"}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default ProjectCards;
