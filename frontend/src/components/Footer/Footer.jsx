import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Comfy Maxers</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
