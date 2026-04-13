import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }} className="align-items-center">
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="about-heading" style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              ABOUT <strong className="purple">ME.</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            className="about-img text-center"
            style={{ paddingBottom: "50px" }}
          >
            <img src={laptopImg} alt="about" className="img-fluid about-hero-img" style={{ filter: "drop-shadow(0 0 20px var(--accent-glow))", opacity: 0.8 }} />
          </Col>
        </Row>
        
        <div className="skillset-section">
          <h1 className="project-heading">
            PROFESSIONAL <strong className="purple">SKILLSET.</strong>
          </h1>
          <Techstack />
        </div>

        <div className="tools-section">
          <h1 className="project-heading">
            <strong className="purple">TOOLS</strong> I USE.
          </h1>
          <Toolstack />
        </div>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
