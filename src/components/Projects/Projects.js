import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import metalwit from "../../Assets/Projects/metalwit.png";
import camera from "../../Assets/Projects/camera.png";
import kartoniarka from "../../Assets/Projects/kartoniarka.png";
import listwy from "../../Assets/Projects/listwy.png";
import riverts from "../../Assets/Projects/riverts.png";
import sequencer from "../../Assets/Projects/sequencer.png";
import system3000 from "../../Assets/Projects/system3000.png";
import horus from "../../Assets/Projects/horus.png";
import autoproces from "../../Assets/Projects/autoproces.png";
import Kuna from "../../Assets/Projects/Kuna.png";
import Primaloft from "../../Assets/Projects/Primaloft.png";
import kubaportfolio from "../../Assets/Projects/kuba-portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects we've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={metalwit}
              isBlog={false}
              title="Metalwit OEE / WMS"
              description="Data collection from CNC machines, custom touch panels and dashboards. Custom linux nodes and network"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={camera}
              isBlog={false}
              title="Custom smart camera"
              description="Our 5MP ARM based smart camera with ethernet interface and light control. Programmed in MicroPython. Capable of direct socket communication with Fanuc (and other) robots"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autoproces}
              isBlog={false}
              title="Autoproces vision"
              description="End-to-end application for training and deployment of models for object detection and validation. Application communicates with PLC's and robots. Base board is Raspberry Pi 4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kartoniarka}
              isBlog={false}
              title="Vision system for cardboard folding robot"
              description="ARM CPU board with linux, working with Basler camera and live preview with web interface. Program calculate cardboard position in 3D space and distance which can be measured with very high precision (1mm on entire stack's height). All working with red light and communicating with 6-axis Fanuc robot"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kuna}
              isBlog={false}
              title="KUNA"
              description="Webtool built to speed up and ease the usage of IFS ERP in repairs business. High traffic used by 600+ people"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={listwy}
              isBlog={false}
              title="Vision system for riveting machine"
              description="Product placement in riveting machine using our smart camera. Very high precision (0.01 mm). Additional quality check and fast response time. STM-32 Camera with MicroPython on board. Works with Fanuc Robot using socket messaging communication. The camera also has a connector to power light with 24V which can be controlled using our board. Everything is enclosed in metal case with lens mount"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={riverts}
              isBlog={false}
              title="Quality control vision system"
              description="Touch panel based on Raspberry Pi CM4, used for object detection and validation with special trained model, in real time. Camera streams image to panel and display validation results. If detected object is incorrect, panel displays alert with confirmation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sequencer}
              isBlog={false}
              title="Algorithmic sequencer"
              description="Open-source euclidean midi sequencer with display and custom hot-swap switches"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={system3000}
              isBlog={false}
              title="System3000"
              description="Recovery of debts / sales of debts - Web portal backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={horus}
              isBlog={false}
              title="Horus CRM v2"
              description="Complex CRM and related tools for polish 3M reseller"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Primaloft}
              isBlog={false}
              title="Primaloft"
              description="Web backend for Primnaloft's voting system and website"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kubaportfolio}
              isBlog={false}
              title="Kuba Elwertowski portfolio"
              description="One of many nice personal websites we prepared in the past in collaboration with Synbios Creative Studio"

            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
