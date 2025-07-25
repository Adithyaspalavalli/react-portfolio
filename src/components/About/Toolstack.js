import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  // SiPostman,
  // SiSlack,
  // SiVercel,
  // SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <span className="purple"> <p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>Visiual Studio Code</p></span>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <span className="purple"> <p style={{ fontSize: "1rem", marginTop: "0.5rem" }}Postman</p></span>
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
