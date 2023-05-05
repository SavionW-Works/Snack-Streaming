import React from "react";
import AddItem from "./AddItem";
import { Container, Row, Col } from "react-bootstrap";
const MovieIcon = (props) => {
  const ItemComponent = props.itemComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <Container>
          <Col
            className="image-container d-flex justify-content-start  m-3"
            key={movie.imdbID}
          >
            <img src={movie.Poster} alt="Movie Poster"></img>
            <div
              onClick={() => props.handleItemsClick(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <ItemComponent />
            </div>
          </Col>
          <div className="text-center">
            <h3 className="fw-bolder">
              {movie.Title} ({movie.Year})
            </h3>
            <h4 className="fw-bolder text-warning">{movie.Genres}</h4>
          </div>
        </Container>
      ))}
    </>
  );
};

export default MovieIcon;
