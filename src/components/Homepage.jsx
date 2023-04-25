import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

function Homepage() {
  return (
    <>
      <Container className="justify-content-center">
        <Row>
          <Col className="col text-center">
            <p className="display-1 text-warning fw-bold">Snack Streaming</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Homepage;
