import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./Searchbox";
import AddItem from "./AddItem";
import RemoveItem from "./RemoveItem";
import cartData from "../data/cartData";

import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

import MovieIcon from "./MovieIcon";

const MovieList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [cartItems, setCartItems] = useState(cartData); //Limit to 10
  const [movieData, setMovieData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const API_KEY = import.meta.env.VITE_APP_API_KEY; //How to use .env with Vite

  const fetchGenreData = async (id) => {
    //How to use .env with Vite
    const URL = `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`; //Retrieve By ID
    var hold = [];
    try {
      const response = await axios.get(URL);
      if (JSON.stringify(response.data)) {
        //If a valid response is received
        hold = [response.data];
      }
    } catch (e) {
      setError("Error: " + e.message);
    } finally {
      setLoading(false);
    }

    //Genre by specific Id
    return hold[0]["Genre"];
  };

  const fetchAPIData = async (searchValue) => {
    setLoading(true);

    const URL = `http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;

    //Possibly filter video games and individual episodes from api calls

    try {
      const response = await axios.get(URL);
      if (JSON.stringify(response.data.Search)) {
        const movies = response.data.Search;

        const newMovieData = await Promise.all(
          //Adds an element called "Genres" to each movie
          movies.map(async (movie) => {
            const genres = await fetchGenreData(movie.imdbID);
            return { ...movie, Genres: genres };
          })
        );
        setMovieData(newMovieData); //Ombd searches must be extracted with .s
      }
    } catch (e) {
      setError("Error: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPIData(searchValue);
  }, [newSearch]); //When any values in the useEffect change, useEffect is called again

  useEffect(() => {
    const newCartData = cartItems.map((item) => ({ ...item }));
    Object.assign(cartData, newCartData);
  }, [cartItems]);

  //Smaller Functions

  const addNewItem = (movie) => {
    //Checks if cart is at capacity
    if (cartItems.length == 10) {
      return;
    }

    //Prevents duplicate movies from being added
    for (var i in cartItems) {
      if (movie === cartItems[i]) {
        return;
      }
    }

    const newCartList = [...cartItems, movie]; //Adds movie parameter to a copy of cartItems
    setCartItems(newCartList); //Updates cartList
  };

  const removeNewItem = (movie) => {
    // const newListing = {};
    // newListing[movie.Title] = movie; //Gives each movie object a name equal to its title
    const newCartList = cartItems.filter(
      (item) => item.imdbID !== movie.imdbID
    ); //Removes movies that match a specified id a copy of cartItems
    setCartItems(newCartList);
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
          <button
            type="button"
            className="btn btn-primary mt-4"
            onClick={() => setNewSearch(searchValue)}
          >
            Search
          </button>
        </div>

        {/* Movie Search */}
        <Container className="fluid movie-app">
          <Row className="">
            {!loading && (
              <MovieIcon
                movies={movieData}
                handleItemsClick={addNewItem}
                itemComponent={AddItem}
              ></MovieIcon>
            )}

            {loading && (
              <div>
                <h3 className="display-3 fw-bolder text-center p-6">LOADING</h3>
              </div>
            )}
          </Row>
        </Container>
      </div>

      {/* Cart */}
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
            <MovieIcon
              movies={cartItems}
              handleItemsClick={removeNewItem}
              itemComponent={RemoveItem}
            ></MovieIcon>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MovieList;
