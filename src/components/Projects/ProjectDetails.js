import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
import AllProjects from "../../Assets/ProjectData/AllProjects";

function ProjectDetails() {
  const form = useRef();
  const { projectID } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const filterd = AllProjects.find(
      (project) => (project.id == parseInt(projectID))
    );
    setDetails(filterd);
    console.log('this is details',filterd);
  }, [projectID]);

  console.log(details);

  const { register, handleSubmit, reset } = useForm();

  const sendEmail = (data) => {
    emailjs
      .sendForm(
        "service_w422wzm",
        "template_3d288tb",
        form.current,
        "WUbPcNX44GE7fiWEZ"
      )
      .then(
        (data) => {
          console.log(data.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast("Your message Sent!", { icon: "🚀" });
    reset();
  };

  return (
    <Container fluid className="about-section">
      <ToastContainer />
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{ paddingTop: "50px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={details.image} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              // paddingTop: "30px",
              // paddingBottom: "50px",
            }}
            className="project-card"
          >
              <Card className="project-card-view">
                <Card.Body>
                  <Card.Title>{details.title}</Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    {details.description}
                  </Card.Text>
                  <Button
                    variant="primary"
                    href={details.Front}
                    className="mt-2 mx-1"
                    target="_blank"
                  >
                    <BiLinkExternal /> &nbsp;
                    {" Frontend "}
                  </Button>
                  <Button
                    variant="primary"
                    href={details.Back}
                    className="mt-2 mx-1"
                    target="_blank"
                  >
                    <BiLinkExternal /> &nbsp;
                    {" Backend "}
                  </Button>
                  <Button
                    variant="primary"
                    href={details.Web}
                    className="mt-2 mx-1"
                    target="_blank"
                  >
                    <BiLinkExternal /> &nbsp;
                    {" Live"}
                  </Button>
                </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectDetails;
