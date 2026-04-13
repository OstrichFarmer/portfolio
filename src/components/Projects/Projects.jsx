import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import hotel from "../../Assets/Projects/hotel.png";
import mobile from "../../Assets/Projects/mobile.png";
import whistleblower from "../../Assets/Projects/whistleblower.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          MY <strong className="purple">PROJECTS. </strong>
        </h1>
        <p className="project-subheading">
          A selection of my recent works in web and mobile development.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="HOTEL IT"
              description="A professional hotel booking platform built with Flutter. Features intuitive UI for browsing and reservations across iOS and Android."
              ghLink="https://github.com/OstrichFarmer/hotel_it"
              tags={["Flutter", "Dart", "Firebase"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whistleblower}
              isBlog={false}
              title="KPMG WHISTLEBLOWER"
              description="Secure web application for KPMG clients to report unethical activities anonymously. Built with React for high security and privacy."
              demoLink="https://apps.ng.kpmg.com/whistleblower/#"
              tags={["React", "Javascript", "Security"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobile}
              isBlog={false}
              title="CAPATUNO"
              description="A modern dating application built with Flutter, focusing on meaningful connections and smooth cross-platform interactions."
              ghLink="https://github.com/OstrichFarmer/ilove"
              tags={["Flutter", "Dart", "UI/UX"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
