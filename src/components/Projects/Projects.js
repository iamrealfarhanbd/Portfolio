import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pAcademy from "../../Assets/Projects/pAcademy.png";
import ToolShop from "../../Assets/Projects/ToolShop.png";
import Ebazar from "../../Assets/Projects/Ebazar.png";

function Projects() {
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToolShop}
              isBlog={false}
              title=" ToolShop"
              description='This is a full-stack Tools Manufacturer Website.
              Login/Registration and Social Authentication.
              Admin can manage orders, Tools, add User Role
              Users can manage user order and Profile.
              Admin Dashboard available.
              user dashboard available.
              Payment system added 
              '
              Front="https://github.com/iamrealfarhanbd/ToolShop-Server"
              back="https://github.com/iamrealfarhanbd/ToolShop-Client"
              web="https://toolshop-56a24.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ebazar}
              isBlog={false}
              title="Ebazar Warehouse"
              description="This is a full-stack Warehouse Management Website
              Login/Registration & Social Authentication.
              Users Can Create,Read, Update and Delete Products.
              User dashboard available.
              Details page User can Update or Deliver  Product Quantity
              "
              Front="https://github.com/iamrealfarhanbd/Ebazar-WareHouse-Server"
              back="https://github.com/iamrealfarhanbd/Ebazar-WareHouse-Client"
              web="https://ebazar-b8516.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pAcademy}
              isBlog={false}
              title="Photography Academy"
              description="Private/protected routes in Service page
              Without sign in or sign up no one can purchase serices
              Password reset option available
              Google login available
              about page
              404 route"
              Front="https://github.com/iamrealfarhanbd/ToolShop-Server"
              back="https://github.com/iamrealfarhanbd/ToolShop-Client"
              web="https://photographyacademy-3469b.web.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
