import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroAsset from "../../Assets/hero_asset.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hello World.
              </h1>

              <h1 className="heading-name">
                I'M <strong className="main-name">JOEL UGWA</strong>
              </h1>

              <div style={{ padding: "50px 0", textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="text-center">
              <img
                src={heroAsset}
                alt="modern hero"
                className="img-fluid hero-img"
                style={{ maxHeight: "600px", filter: "drop-shadow(0 0 20px var(--accent-glow))" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
