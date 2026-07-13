import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Joel_Ugwa_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import pdfWorkerSrc from "pdfjs-dist/build/pdf.worker.min.js?url";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerSrc;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume-content-row" style={{ justifyContent: "center", position: "relative" }}>
          <h1 className="project-heading">MY <strong className="purple">RESUME.</strong></h1>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="resume-download-btn"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume d-flex justify-content-center">
          <Document 
            file={pdf} 
            className="d-flex justify-content-center resume-document"
            loading={<div className="loader-text">Loading PDF...</div>}
            noData={<div className="loader-text">No PDF found.</div>}
          >
            <Page 
              pageNumber={1} 
              scale={width > 2000 ? 2.0 : width > 1400 ? 1.5 : width > 786 ? 1.1 : 0.6} 
              className="glass-page" 
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="resume-download-btn"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
