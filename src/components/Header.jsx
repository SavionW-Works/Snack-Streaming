import React, { useState, useEffect } from "react";
import SearchBox from "./Searchbox";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const getClassName = (path) => {
    if (path == "/") {
      if (activeLink === path) {
        return "fw-bold text-info";
      } else {
        return "text-warning";
      }
    } else if (activeLink.includes(path)) {
      //Uses .includes() due to ids being part of links
      return "fw-bold text-info";
    } else {
      return "text-warning";
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <div className="container-fluid ">
          <div
            className="collapse navbar-collapse pt-3 px-3 bg-secondary "
            id="navmenu"
          >
            <ul className="navbar-nav me-auto d-flex align-items-center justify-content-between ">
              <li className="nav-link navs">
                <h3 className="navs">
                  <RouterLink
                    className={`${getClassName("/")} display-4`}
                    to="/"
                  >
                    Home
                  </RouterLink>
                </h3>
              </li>
              <li className="nav-link navs">
                <h3 className="navs">
                  <RouterLink
                    className={`${getClassName("/login")} display-4`}
                    to="/login"
                  >
                    Login
                  </RouterLink>
                </h3>
              </li>
              <li className="nav-link navs">
                <h3 className="navs">
                  <RouterLink
                    className={`${getClassName("/movies")} display-4`}
                    to="/movies"
                  >
                    Movies
                  </RouterLink>
                </h3>
              </li>

              <li className="nav-link">
                <h3 className="navs">
                  <RouterLink
                    className={`${getClassName("/dashboard")} display-4`}
                    to="/dashboard"
                  >
                    Dashboard
                  </RouterLink>
                </h3>
              </li>

              <li className="nav-link">
                <h3 className="navs">
                  <RouterLink
                    className={`${getClassName("/signup")} display-4`}
                    to="/signup"
                  >
                    Signup
                  </RouterLink>
                </h3>
              </li>

              <li className="nav-link">
                <h3 className="navs">
                  <RouterLink
                    className={`${getClassName("/checkout")} display-4`}
                    to="/checkout"
                  >
                    Checkout
                  </RouterLink>
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
