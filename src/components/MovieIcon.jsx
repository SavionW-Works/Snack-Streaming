import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cartData from "../data/cartData";
const MovieIcon = (props) => {
  const ItemComponent = props.itemComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <Col className="m-3">
          <Col
            className="image-container d-flex justify-content-center"
            key={movie.imdbID}
          >
            <img src={movie.Poster} alt="Movie Poster" />

            {/* Renders the overlay only if it was provided (needed for Checkout) */}
            {ItemComponent && (
              <div
                onClick={() => props.handleItemsClick(movie)}
                className="overlay d-flex align-items-center justify-content-center"
              >
                {/* Renders the ItemComponent only if it was provided (needed for Checkout) */}
                {ItemComponent && <ItemComponent />}
              </div>
            )}
          </Col>

          <Col className="justify-content-start m-0">
            <div className="text-center">
              <h3 className="fw-bold">
                {movie.Title} ({movie.Year})
              </h3>
              <h4 className="text-warning">{movie.Genres}</h4>
            </div>
          </Col>
        </Col>
      ))}
    </>
  );
};

export default MovieIcon;
