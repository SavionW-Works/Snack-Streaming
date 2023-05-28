import { useState } from "react";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import popcorn from "../assets/wp1896112-3103121737.jpg";
import popcorn2 from "../assets/popcorn2.jpg";
import cart_image from "../assets/iconmonstr-basket-21-240.png";
import genre_wheel from "../assets/Genre Wheel.png";
import money from "../assets/iconmonstr-banknote-13-240.png";
import "../App.css";

//import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

function Homepage() {
  return (
    <>
      <Container className="justify-content-center p-0 m-0">
        <Row className="h-50">
          <Col className="col text-center p-0 m-0 h-50">
            <div class="card homepage-background-color">
              <img
                src={popcorn2}
                style={{ height: "43em", width: "100%", objectFit: "cover" }}
                className="card-img opacity-25 h-0"
                alt="..."
              ></img>

              <div className="card-img-overlay">
                <h1 className="title-text fw-bolder text-start text-warning px-5 py-3 d-flex align-items-center">
                  Snack Streaming
                </h1>
                <p className="display-3 subtitle-text text-white fw-bolder px-5 py-3 d-flex align-items-center">
                  Perfectly Portioned Content.
                </p>
                <p className="display-4 text-white px-5 d-flex py-3 align-items-center">
                  Pay for what you want. Save on what you don't.
                </p>

                <div className="py-4 my-5">
                  <RouterLink to="/login">
                    <button type="button" className="btn btn-warning">
                      <p className="title-text display-1 p-2 m-0 fw-bolder">
                        Get Started
                      </p>
                    </button>
                  </RouterLink>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="text-center pt-6">
        <h1 className="title-text display-1 text-warning text-decoration-underline text-center fw-bold">
          How to Snack:
        </h1>

        {/* Start of row */}
        <Row className="my-3 py-3 justify-items-center d-flex align-items-center">
          <Col className="p-5 m-5 col-5">
            <p className="display-3 text-white fw-bold">
              1. Pick your favorite movies
            </p>
          </Col>

          <Col className="p-5 m-2 col-5">
            <img src={cart_image} className="img-fluid" alt="cart icon" />
          </Col>
        </Row>

        <Row className="border border-warning my-4"></Row>

        {/* Start of row */}
        <Row className="my-3 my-3 py-3 justify-items-center d-flex align-items-center">
          <Col className="px-5 col-5">
            <img src={genre_wheel} className="img-fluid" alt="genre wheel" />
          </Col>

          <Col className="p-5 m-5 col-5 d-flex align-items-center">
            <p className="display-3 text-white fw-bold">
              2. Save based on your niches
            </p>
          </Col>
        </Row>

        <Row className="border border-warning my-4"></Row>

        <Row className="my-3 py-3 justify-items-center d-flex align-items-center">
          <Col className="p-5 m-5 p-5 m-5 col-5 d-flex align-items-center">
            <p className="display-3 text-white fw-bold">
              3. Enjoy your favorite movies at a bargain!
            </p>
          </Col>

          <Col className="px-5 col-5">
            <img src={money} className="img-fluid" alt="..." />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Homepage;
