import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiSolidity,
} from "react-icons/si";

function Techstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
          <CgCPlusPlus />
         <span className="purple"> <p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>C++</p></span>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
          <DiJavascript1 />
          <span className="purple"> <p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>JavaScript</p></span>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
          <DiNodejs />
           <span className="purple"><p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>Node.js</p></span>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
          <DiReact />
           <span className="purple"><p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>React</p></span>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
          <SiSolidity />
           <span className="purple"><p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>Solidity</p></span>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
          <DiMongodb />
           <span className="purple"><p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>MongoDB</p></span>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
          <DiGit />
           <span className="purple"><p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>Git</p></span>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
          <SiFirebase />
           <span className="purple"><p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>Firebase</p></span>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
          <DiPython />
         <span className="purple">  <p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>Python</p></span>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
          <DiJava />
           <span className="purple"><p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>Java</p></span>
        </Col>
      </Row>
    </>
  );
}

export default Techstack;