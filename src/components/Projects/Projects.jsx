import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hotel from "../../Assets/Projects/hotel.png";
import mobile from "../../Assets/Projects/mobile.png";
import whistleblower from "../../Assets/Projects/whistleblower.png";
import galisuite from "../../Assets/Projects/galisuite.png";
import naijahousereview from "../../Assets/Projects/naijahousereview.png";
import fundpilot from "../../Assets/Projects/fundpilot1.png";
import pos from "../../Assets/Projects/pos.png";
import hms from "../../Assets/Projects/hms.png";

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={galisuite}
              isBlog={false}
              title="GaliSuite"
              description="A luxury hotel and stay booking platform offering exclusive accommodations and seamless reservation experiences."
              demoLink="https://www.galisuite.com/"
              tags={["React", "Tailwind", "Golang", "Paystack"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={naijahousereview}
              isBlog={false}
              title="Naija House Review"
              description="A house review platform for Nigeria, enabling tenants to share evidence-based experiences and improve housing quality."
              demoLink="https://www.naijahousereview.com/"
              tags={["React", "Firebase", "Golang"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fundpilot}
              isBlog={false}
              title="Fundpilot"
              description="Comprehensive investment management app for tracking stocks, crypto, and real estate with AI-powered insights."
              demoLink="https://play.google.com/store/apps/details?id=com.fundpilot.fundpilot"
              tags={["Flutter", "Golang", "Firebase", "Gemini"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pos}
              isBlog={false}
              title="Klarrk POS"
              description="Cloud point-of-sale for retail shops and supermarkets, with multi-branch stock sync, offline-first sales queuing, and end-of-shift cash audits."
              demoLink="https://admin.klarrk.com"
              tags={["React", "TypeScript", "Go", "PostgreSQL"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hms}
              isBlog={false}
              title="Klarrk HMS"
              description="Hotel management system that hardware-locks the room keycard encoder, eliminating off-book check-ins by requiring a paid booking before any keycard can be cut."
              demoLink="https://hms.klarrk.com"
              tags={["React", "TypeScript", "Go", "Electron"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
