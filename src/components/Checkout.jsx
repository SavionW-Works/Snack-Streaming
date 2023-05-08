import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import cartItems from "../data/cartData";
import MovieIcon from "./MovieIcon";

const Checkout = () => {
  const PriceCalc = (cartItems) => {
    var all_genres = {};

    //Iterates through cart items and adds genres to a dictionary with respective frequencies
    cartItems.map((item) => {
      var genre_list = item.Genres.split(/[\s,]+/);

      for (let i = 0; i < genre_list.length; i++) {
        if (all_genres[genre_list[i]] >= 1) {
          all_genres[genre_list[i]] += 1;
        } else {
          all_genres[genre_list[i]] = 1;
        }
      }
    });

    //console.log(all_genres);
  }; //End of PriceCalc

  return (
    <>
      <Container className="justify-content-center">
        <Row>
          <Col className="col text-center">
            <p className="display-1 text-warning fw-bold">Checkout</p>
          </Col>
        </Row>
      </Container>

      {/* Cart Display */}
      <div className="py-3">
        <div className="ms-auto d-flex align-items-center">
          <h2>
            Cart (
            {cartItems.length == 10 && (
              <span className="text-warning fw-bold">
                {cartItems.length}/{10}
              </span>
            )}
            {cartItems.length < 10 && (
              <>
                {cartItems.length}/{10}
              </>
            )}
            )
          </h2>
        </div>
        <Container className="fluid movie-app">
          <Row className="">
            <MovieIcon movies={cartItems}></MovieIcon>
          </Row>
        </Container>
      </div>

      <div>
        <h3>Detected Genres: {PriceCalc(cartItems)}</h3>
      </div>
    </>
  );
};

export default Checkout;
