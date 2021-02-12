import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/sushant-resume.pdf";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Key Skills</h3>
            <Resumecontent
              title="Web Design"
              date=""
              content={[
                "HTML","CSS,  SASS,  Bootstrap"
              ]}
            />

            <Resumecontent
              title="FrontEnd Web Development"
              date=""
              content={[
                "React.js, Gatsby.js, Redux","JSON, JSX, Web Components, Axios"
              ]}
            />

            <Resumecontent
              title="Backend Web Development"
              date=""
              content={[
                "Headless CMS","Node.js, Express","MongoDB, MySql"
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="BSc.Computing in IT [ISMT College, Kathmandu] "
              date="2018 - Present"
              content={[]}
            />
            <Resumecontent
              title="12TH Board [Xavier International College, Kathmandu]"
              date="2015 - 2017"
              content={[]}
            />
            <Resumecontent
              title="10TH Board [PCPBHS, Dharan]"
              date="2005 - 2015"
              content={[]}
            />
            <h3 className="resume-title">Achievements</h3>
            <Resumecontent
              title=""
              content={[
                "Github Contributions 400+",
                "Open Source Repositories 60+",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
