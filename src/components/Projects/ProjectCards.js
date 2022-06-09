import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.Front} className="mt-2 mx-1" target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : " Frontend "}
        </Button>
        <Button variant="primary" href={props.Back} className="mt-2 mx-1" target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : " Backend "}
        </Button>
        <Button variant="primary" href={props.Web} className="mt-2 mx-1" target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : " Live"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
