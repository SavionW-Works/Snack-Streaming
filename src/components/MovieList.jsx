import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./Searchbox";
import AddItem from "./AddItem";

//import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";

import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

import MovieIcon from "./MovieIcon";

const MovieList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [cartItems, setCartItems] = useState([]); //Limit to 10
  const [movieData, setMovieData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchAPIData = async (searchValue) => {
    setLoading(true);
    const API_KEY = import.meta.env.VITE_APP_API_KEY; //How to use .env with Vite
    const URL = `http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;

    try {
      const response = await axios.get(URL);
      if (JSON.stringify(response.data.Search)) {
        //If a valid response is received (added due to SearchBar)
        setMovieData(response.data.Search); //Ombd searches must be extracted with .s
      }
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
  };

  useEffect(() => {
    fetchAPIData(searchValue);
  }, [searchValue]); //When any values in the useEffect change, useEffect is called again

  const addNewItem = (movie) => {
    // const newListing = {};
    // newListing[movie.Title] = movie; //Gives each movie object a name equal to its title
    const newCartList = [...cartItems, movie]; //Adds movie parameter to a copy of cartItems
    setCartItems(newCartList);
    //console.log(cartItems);
  };

  return (
    <>
      <div className="py-3">
        <div className="ms-auto d-flex align-items-center">
          <h1>Movies</h1>
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>

        <Container className="fluid movie-app">
          <Row className="">
            <MovieIcon
              movies={movieData}
              handleItemsClick={addNewItem}
              itemComponent={AddItem}
            ></MovieIcon>
          </Row>
        </Container>
      </div>

      <div className="py-3">
        <div className="ms-auto d-flex align-items-center">
          <h2>
            Cart ({cartItems.length}/{10})
          </h2>
        </div>
        <Container className="fluid movie-app">
          <Row className="">
            <MovieIcon
              movies={cartItems}
              handleItemsClick={addNewItem}
              itemComponent={AddItem}
            ></MovieIcon>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MovieList;
