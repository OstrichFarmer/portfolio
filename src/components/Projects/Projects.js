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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="HOTEL IT"
              description="I developed a personal hotel booking application using Flutter that allows users to seamlessly explore and book a hotel room of their choice. The app offers an intuitive user interface, enabling users to browse through a variety of hotel options, view detailed room information, and make reservations with ease. Leveraging the power of cross-platform development, this app delivers a smooth experience across both iOS and Android, ensuring consistent performance and user satisfaction."
              ghLink="https://github.com/OstrichFarmer/hotel_it"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whistleblower}
              isBlog={false}
              title="KPMG WHISTLEBLOWER"
              description="I developed a Whistleblower web application tailored for KPMG clients using React. This platform enables users to securely and anonymously report unethical or unlawful activities within organizations. The application focuses on user privacy, intuitive navigation, and a streamlined reporting process. Built with modern web technologies, the app ensures a responsive, fast, and secure user experience, empowering individuals to submit reports confidentially and with confidence."
              //  ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://apps.ng.kpmg.com/whistleblower/#"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobile}
              isBlog={false}
              title="CAPATUNO"
              description="I developed CAPATUNO, a dating app built with Flutter, designed to connect people seeking meaningful relationships. CAPATUNO provides users with an engaging and user-friendly platform to discover potential matches through personalized profiles and intuitive swiping features. The app delivers a smooth, cross-platform experience for both Android and iOS users, ensuring high performance and seamless interactions as users explore and connect with new people."
              ghLink="https://github.com/OstrichFarmer/ilove"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          {/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
