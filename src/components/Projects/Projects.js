import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCards from "./ProjectCards";
import AllProjects from '../../Assets/ProjectData/AllProjects'

const Projects=()=> {
  // const [myprojects, setMyProjects] = useState([]);

  // useEffect((AllProjects) => {
  //   const filterd = AllProjects.map((AllProject) => (setMyProjects(AllProject)));
  //   console.log(filterd);
  // }, []);
  // console.log(myprojects);
 

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {
            AllProjects.map((project) => (<ProjectCards key={project.id} project={project} />))
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
