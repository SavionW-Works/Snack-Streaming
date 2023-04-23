import { useState } from "react";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

function Homepage() {
  return (
    <>
      <Container>
        <Row>
          <Col className="col ">
            <p className="display-2 text-warning fw-bold">Snack Streaming</p>
          </Col>
          <Col>
            <Link to={`/movies`}>
              <p className="display-2 text-primary fw-bold">All Movies</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Homepage;
