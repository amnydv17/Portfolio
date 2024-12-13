import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [resumeUrl, setResumeUrl] = useState(null); // Store resume URL for rendering

  useEffect(() => {
    setWidth(window.innerWidth);

    // Load resume from localStorage on page load
    const savedResume = localStorage.getItem("resumeUrl");
    if (savedResume) {
      setResumeUrl(savedResume);
    }
  }, []);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.type === "application/pdf") {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const fileDataUrl = fileReader.result;
        setResumeUrl(fileDataUrl); // Set the file URL for the Document component
        localStorage.setItem("resumeUrl", fileDataUrl); // Save to localStorage
      };
      fileReader.readAsDataURL(uploadedFile);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  // const handleClearResume = () => {
  //   localStorage.removeItem("resumeUrl");
  //   setResumeUrl(null);
  // };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeUrl || "https://drive.google.com/file/d/1MFoif4hvLjZXztM4vjg3hp8whg_EVnZg/view"}
            target="_blank"
            disabled={!resumeUrl}
            download
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className="resume">
          {resumeUrl ? (
            <Document file={resumeUrl} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          ) : (
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              No resume uploaded. Please upload a PDF to preview it.
            </p>
          )}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            style={{
              display: "block",
              margin: "10px auto",
              maxWidth: "250px",
              textAlign: "center",
            }}
          />
        </Row>

        {/* {resumeUrl && (
          <Row style={{ justifyContent: "center", position: "relative", marginTop: "10px" }}>
            <Button variant="danger" onClick={handleClearResume} style={{ maxWidth: "250px" }}>
              Clear Resume
            </Button>
          </Row>
        )} */}
      </Container>
    </div>
  );
}

export default ResumeNew;
