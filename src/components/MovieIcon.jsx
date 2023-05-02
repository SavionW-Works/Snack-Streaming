import React from "react";
import AddItem from "./AddItem";
import { Container, Row, Col } from "react-bootstrap";
const MovieIcon = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <Container>
          <Col
            className="image-container d-flex justify-content-start  m-3"
            key={movie.imdbID}
          >
            <img src={movie.Poster} alt="Movie Poster"></img>
            <div className="overlay d-flex align-items-center justify-content-center">
              <AddItem />
            </div>
          </Col>
          <h3 className="text-center fw-bolder">{movie.Title}</h3>
        </Container>
      ))}
    </>
  );
};

export default MovieIcon;
