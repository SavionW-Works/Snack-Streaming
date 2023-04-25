import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./Searchbox";
//import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";

import "../App.css";
import env from "react-dotenv";
import { Container, Row, Col } from "react-bootstrap";

const MovieList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieData, setMovieData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchAPIData = async (searchValue) => {
    setLoading(true);

    const URL = `http://www.omdbapi.com/?s=toy+story&apikey=${env.REACT_APP_API_KEY}&`;

    try {
      const response = await axios.get(URL);
      if (JSON.stringify(response.data.Search)) {
        //If a valid response is received (added due to SearchBar)
        setMovieData(response.data.Search); //Ombd searches must be extracted with .s
      }

      console.log(JSON.stringify(response));
    } catch (e) {
      setError("Error: " + e.message);
    } finally {
      setLoading(false);
    }

    // const response = await fetch(URL);
    // const responseJson = await response.json();
    // if (responseJson.Search) {
    //   setMovies(responseJson.Search);
    // }

    console.log(movieData);
    console.log(movieData);
  };

  useEffect(() => {
    fetchAPIData(searchValue);
  }, [searchValue]); //When any values in the useEffect change, useEffect is called again

  return (
    <>
      <div className="ms-auto d-flex align-items-center">
        <h1>Movies</h1>

        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

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
                  <h3 className="text-center fw-bolder">{movie.Title}</h3>
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
