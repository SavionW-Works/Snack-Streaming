import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
//import cartData from "../data/cartData";
import MovieIcon from "./MovieIcon";
import { useState, useEffect } from "react";

const Checkout = () => {
  const [price, setPrice] = useState(0.0);

  const [cartData, setCartData] = useState([]);
  const [favoriteGenres, setFavoriteGenres] = useState([]);
  var all_genres = {};
  var genre_accum = 0.25;
  var total_genres = 24;
  var cart_max = 14;

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("snack-streaming-cart"));
    setCartData(cartItems || []);
  }, []);

  const PriceCalc = (cartData) => {
    //Iterates through cart items and adds genres to a dictionary with respective frequencies
    cartData.map((item) => {
      var genre_list = item.Genres.split(/[\s,]+/);

      for (let i = 0; i < genre_list.length; i++) {
        if (all_genres[genre_list[i]] >= 1) {
          all_genres[genre_list[i]] += 1;
        } else {
          all_genres[genre_list[i]] = 1;
        }
      }
    });

    var num_movies = cartData.length;

    //There are 24 different genres as follows:
    /*[
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film Noir",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Short",
    "Sport",
    "Superhero",
    "Thriller",
    "War",
    "Western"
] */

    //Add $.30 for every different genre, and add a fraction of $2 for every genre:total ratio
    for (let genre in all_genres) {
      var price_copy = price;
      //setPrice(price_copy + genre_accum + (all_genres[genre] / num_movies) * 2);
      setPrice(
        price_copy +
          genre_accum +
          (all_genres[genre] / total_genres) * 2 +
          num_movies / cart_max
      );
    }

    //console.log(price);
  }; //End of PriceCalc

  const findFavoriteGenre = (all_genres) => {
    var max = 0;
    var max_list = [];
    for (let genre in all_genres) {
      if (all_genres[genre] > max) {
        max_list = []; //Reset max list
        max_list.push(genre); //Add to new max_list
        max = all_genres[genre];
      } else if (all_genres[genre] === max) {
        max_list.push(genre);
      }
    }

    setFavoriteGenres(max_list);
    //console.log(max_list);
  };

  //Starts filling up all_genres and calculates price when page mounts
  useEffect(() => {
    setPrice(0);
    PriceCalc(cartData);
    findFavoriteGenre(all_genres);
  }, [cartData]); //When any values in the useEffect change, useEffect is called again

  return (
    <>
      <Container className="justify-content-center">
        <Row>
          <Col className="col text-center">
            <p className="display-1 text-warning fw-bold text-decoration-underline">
              Checkout
            </p>
          </Col>
        </Row>
      </Container>

      {/* Cart Display */}
      <div className="py-3">
        <div className="ms-auto d-flex align-items-center">
          <h2>
            Cart (
            {cartData.length == cart_max && (
              <span className="text-warning fw-bold">
                {cartData.length}/{cart_max}
              </span>
            )}
            {cartData.length < cart_max && (
              <>
                {cartData.length}/{cart_max}
              </>
            )}
            )
          </h2> 
        </div> 
        <div className="container">
        {cartData.length == 0 && <h3 className="display-3 fw-bolder text-center p-6 justify-content-center">
                  Cart Empty
                </h3> }
        </div>
        <Container className="fluid movie-app">
          <Row className="">
            <MovieIcon movies={cartData}></MovieIcon>
          </Row>
        </Container>
      </div>

      <div>
        <Container className="justify-content-center">
          <p className="display-3">
            Total: <span className="text-warning">${price.toFixed(2)}</span> per 2 Weeks
          </p>

          <p className="display-3">Your favorite genres are: </p>
          <ul className="text-warning">
            {favoriteGenres.map((genre) => (
              <>
                <span key={genre} className="display-4">
                  <li>
                    <p>{genre}</p>
                  </li>
                </span>
              </>
            ))}
          </ul>
        </Container>
      </div>
    </>
  );
};

export default Checkout;
