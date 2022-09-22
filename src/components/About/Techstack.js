import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiPython,
  DiDjango,
} from "react-icons/di";
import {
  SiFlask,
  SiMicropython,
  SiArduino,
  SiTensorflow,
  SiQuasar,
  SiOpencv,
  SiJavascript,
  SiMysql,
  SiPostgresql
} from "react-icons/si";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p className="tech-icons-text">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
        <p className="tech-icons-text">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
        <p className="tech-icons-text">Django</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <p className="tech-icons-text">Flask</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
        <p className="tech-icons-text">Arduino</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicropython />
        <p className="tech-icons-text">Micropython</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <p className="tech-icons-text">Tensorflow</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="tech-icons-text">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiQuasar />
        <p className="tech-icons-text">Quasar</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
        <p className="tech-icons-text">OpenCV</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p className="tech-icons-text">MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p className="tech-icons-text">PostgreSQL</p>
      </Col>
      
    </Row>
  );
}

export default Techstack;
