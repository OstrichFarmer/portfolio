import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 className="about-heading">
              WHO <span className="purple">AM I.</span>
            </h1>
            <p className="home-about-body">
              A software developer with a focus on building seamless digital
              experiences.
              <br />
              <br />I specialize in stacks like
              <span className="purple">
                {" "}
                Flutter, Javascript,Golang and Python
              </span>
              , balancing high-performance mobile apps with modern web
              technologies.
              <br />
              <br />
              My interests lie in the intersection of
              <span className="purple"> Artificial Intelligence </span>
              and product-driven software engineering.
            </p>
          </Col>
          <Col md={4} className="myAvtar text-center">
            <Tilt transitionSpeed={1000} scale={1.05}>
              <img
                src={myImg}
                className="img-fluid hero-img-intro"
                alt="avatar"
                style={{ filter: "drop-shadow(0 0 15px var(--accent-glow))" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="social-heading">CONNECT WITH ME</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/OstrichFarmer"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Ostrich_Farmer"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/stephen-joel56/"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/juelputa56/"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
