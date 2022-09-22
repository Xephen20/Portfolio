import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiAtom, DiVisualstudio } from "react-icons/di";
import {
  SiAutodesk,
  SiBlender,
  SiDocker,
  SiGithub,
  SiJupyter,
  SiLinux,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p className="tech-icons-text">Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <p className="tech-icons-text">MacOS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p className="tech-icons-text">Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
        <p className="tech-icons-text">Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <p className="tech-icons-text">Jupyter</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAtom />
        <p className="tech-icons-text">Atom</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p className="tech-icons-text">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender />
        <p className="tech-icons-text">Blender</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAutodesk />
        <p className="tech-icons-text">Autodesk</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
