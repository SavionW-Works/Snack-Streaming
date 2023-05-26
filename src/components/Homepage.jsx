import { useState } from "react";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import popcorn from "../assets/wp1896112-3103121737.jpg";
import popcorn2 from "../assets/popcorn2.jpg";
import "../App.css";

//import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

function Homepage() {
  return (
    <>
      <Container className="justify-content-center">
        <Row>
          <Col className="col text-center p-0">
            <div class="card homepage-background-color">
              <img
                src={popcorn2}
                className="card-img opacity-25  "
                alt="..."
              ></img>

              <div className="card-img-overlay">
                <h1 className="display-1 text-warning fw-bold">
                  Snack Streaming
                </h1>
                <p className="display-3 text-white fw-bold ">
                  Perfectly Portioned Streaming.
                </p>
                <p className="display-3 text-white fw-bolder">
                  Pay for what you want. Save on what you don't.
                </p>

                <RouterLink to="/login">
                  <button type="button" className="btn btn-warning">
                    <p className="display-1 p-2 m-0 fw-bolder">Get Started</p>
                  </button>
                </RouterLink>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="justify-content-center pt-6">
        <h1 className="display-1 text-warning text-center fw-bold">
          How to Snack:
        </h1>
        <Row className="p-3">
          <Col>
            <p className="display-3 text-white fw-bold ">
              1. Pick your favorite movies
            </p>
          </Col>
          <Col>
            {/* <img src="" className="card-img opacity-25  " alt="..."></img> */}
            <p>Img stub</p>
          </Col>
        </Row>

        <Row className="p-3">
          <Col>
            {/* <img src="" className="card-img opacity-25  " alt="..."></img> */}
            <p>Img stub</p>
          </Col>
          <Col>
            <p className="display-3 text-white fw-bold ">
              2. Save based on your niche
            </p>
          </Col>
        </Row>

        <Row className="p-3">
          <Col>
            <p className="display-3 text-white fw-bold ">
              3. Enjoy your favorites at a bargain!
            </p>
          </Col>
          <Col>
            {/* <img src="" className="card-img opacity-25  " alt="..."></img> */}
            <p>Img stub</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Homepage;
