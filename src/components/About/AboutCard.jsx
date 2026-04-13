import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-card-text">
            I am <span className="purple">Joel Ugwa</span>, a Software Engineer based in 
            <span className="purple"> Lagos, Nigeria.</span>
            <br />
            <br />
            Currently, I'm part of the engineering team at 
            <span className="purple"> KPMG</span>, where I build high-impact enterprise solutions. 
            I hold a Bachelor's degree in Remote Sensing and Geospatial Information Systems, 
            which gives me a unique perspective on data and spatial technologies.
            <br />
            <br />
            When I'm not in front of a screen, you can find me:
          </p>
          <ul className="about-activity-list">
            <li className="about-activity">
              <ImPointRight /> Exploring new gaming worlds
            </li>
            <li className="about-activity">
              <ImPointRight /> Capturing moments through photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling to discover new cultures
            </li>
          </ul>

          <p className="about-quote">
            "Engineering is not just about code; it's about solving human problems."{" "}
          </p>
          <footer className="blockquote-footer">Joel Ugwa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
