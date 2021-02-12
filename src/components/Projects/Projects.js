import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import crypto from "../../Assets/Projects/crypto.png";
import currency from "../../Assets/Projects/currency.png";
import hosting from "../../Assets/Projects/hosting.png";
import netflix from "../../Assets/Projects/netflix.png";
import nike from "../../Assets/Projects/nike.png";
import pizza from "../../Assets/Projects/pizza.png";
import restaurant from "../../Assets/Projects/restaurant.png";
import profile from "../../Assets/Projects/profile.png";

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
              imgPath={crypto}
              isBlog={false}
              title="Crypto Currency prices and statistics"
              description="A React app built for tracking the real-time prices and data relating to bitcoins. This app is possible due to crypto API."
              link="https://yourcryptoprice.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Restaurant Website"
              description="A mobile-first responsive website for restaurant. This website is built with HTML, CSS and Javascript."
              link="https://tastydishes.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Movie Stream"
              description="A Netflix clone built with React, Redux and Firebase. This app gets data from TMDB api and uses firebase as backend. This project is currently on development progress."
              link="https://mymoviestream.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={profile}
              isBlog={false}
              title="Search Github Profiles"
              description="A Javascript Application built with github API that allows user to search for others profiles and repositories."
              link="https://githubprofiflesearch.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              isBlog={false}
              title="Currency Converter"
              description="A javascript app to convert and compare foreign currencies in real time."
              link="https://covertyourcurrency.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nike}
              isBlog={false}
              title="Nike Landing Page"
              description="A responsive landing page UI design built with HTML CSS and Jquery."
              link="https://shopnike.netlify.app"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hosting}
              isBlog={false}
              title="A simple website design for a web hosting company."
              description="A responsive landing page UI design built with HTML CSS and Jquery."
              link="https://himalayandata.netlify.app"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizza}
              isBlog={false}
              title="Pizza Website"
              description="A single page website for a pizza shop built with React.js."
              link="https://getpizzaa.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
