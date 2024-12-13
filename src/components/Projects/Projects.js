import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import audio from "../../Assets/Projects/audio.jpg";
import fitflow from "../../Assets/Projects/fitflow.png";
import myblog from "../../Assets/Projects/myBlog.png";
import brain from "../../Assets/Projects/brain.jpg";
import note from "../../Assets/Projects/note.png";

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
              imgPath={myblog}
              isBlog={false}
              title="MyBlog"
              description="MyBlog is a blog creation platform built with ReactJS, Appwrite, and Tailwind CSS. It offers secure login, signup, and logout features, along with a rich-text editor powered by TinyCloud for easy blog creation. The platform includes image uploading for thumbnails, seamless multi-page routing, and a modular design for scalability. Technologies used: ReactJS, Appwrite, JavaScript, Redux, TinyCloud, Tailwind CSS."
              ghLink="https://github.com/amnydv17/MyBlog"
              demoLink="https://my-blog-iota-tawny.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={note}
              isBlog={false}
              title="NoteApp"
              description="NoteApp is a note management web application built with ReactJS, JavaScript, and Tailwind CSS. It features functionality for creating, deleting, updating, searching, and sharing notes. LocalStorage is used for data persistence, ensuring fast and offline-ready performance. The app provides seamless routing for easy navigation to individual notes."
              ghLink="https://github.com/amnydv17/NoteApp"
              demoLink="https://note-app-khaki-rho.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitflow}
              isBlog={false}
              title="FitFlow"
              description="Fitflow is a comprehensive fitness tracking platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and TypeScript. It features real-time updates and personalized dashboards for users to track their health and fitness progress. The platform provides an innovative solution for health and wellness tracking, offering a seamless and interactive user experience."
              ghLink="https://github.com/amnydv17/Fitflow-Frontend"
              // demoLink="https://"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={audio}
              isBlog={false}
              title="Audio AI"
              description="Audio Analysis and Classification is a project that analyzes and processes over 100,000 audio samples to extract valuable insights and patterns. Using advanced audio classification techniques, it improved soundscape monitoring capabilities by 90%. The project employs Python, Librosa, TensorFlow, and CNN for deep learning, with additional tools like Numpy, Pandas, Matplotlib, and Streamlit for data visualization and deployment."
              ghLink="https://github.com/amnydv17/Audio-Analysis-and-Classification"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brain}
              isBlog={false}
              title="Brain Tumor Detection"
              description="Brain Tumor Detection is a deep learning-based computer vision project that uses the U-Net architecture for brain tumor segmentation. The model was trained on MRI scans from the BRATS2020 dataset, with preprocessing steps including skull stripping, intensity normalization, and resizing. The project achieved 96% accuracy and 84% Mean Union Overlap (MUO) in tumor segmentation. Training was optimized with data augmentation, batch normalization, and early stopping."
              ghLink="https://github.com/amnydv17/UNET_Brain_Tumor_Detection"
              //------Please include a demo link here 
            />
          </Col>

          <h1 style={{ color: "white" }}>
            Many more are comes...
        </h1>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
