import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const MovieIcon = (props) => {
  const ItemComponent = props.itemComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <Container className="justify-content-center">
          <Col
            className="image-container d-flex justify-content-center  m-3"
            key={movie.imdbID}
          >
            <img
              src={movie.Poster}
              alt="Movie Poster"
              className="justify-content-start"
            />
            <div
              onClick={() => props.handleItemsClick(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <ItemComponent />
            </div>
          </Col>

          <Col className="justify-content-start m-3 mt-5">
            <div className="text-center">
              <h3 className="fw-bolder">
                {movie.Title} ({movie.Year})
              </h3>
              <h4 className="fw-bolder text-warning">{movie.Genres}</h4>
            </div>
          </Col>
        </Container>
      ))}
    </>
  );
};

export default MovieIcon;
