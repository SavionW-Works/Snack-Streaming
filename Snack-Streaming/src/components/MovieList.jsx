import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";

import "../App.css";
import env from "react-dotenv";
import { Container, Row, Col } from "react-bootstrap";

const MovieList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieData, setMovieData] = useState([]);

  const fetchAPIData = async () => {
    setLoading(true);

    //const URL = `http://www.omdbapi.com/?s=toy+story&apikey=${env.REACT_APP_API_KEY}&`;

    try {
      const response = await axios.get(URL);
      setMovieData(response.data.Search); //Ombd searches must be extracted with .Search

      console.log(JSON.stringify(response));
    } catch (e) {
      setError("Error: " + e.message);
    } finally {
      setLoading(false);
    }

    console.log(movieData);
  };

  useEffect(() => {
    fetchAPIData();
  }, []);

  return (
    <>
      <h1>Movies</h1>
      <Container className="fluid movie-app">
        <Row className="">
          {movieData.map((movie) => {
            return (
              <>
                <Container>
                  <Col
                    className="d-flex justify-content-start  m-3"
                    key={movie.imdbID}
                  >
                    <img src={movie.Poster} alt="Movie Poster"></img>
                  </Col>
                  <h3 className="text-center fw-bold">{movie.Title}</h3>
                </Container>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default MovieList;
