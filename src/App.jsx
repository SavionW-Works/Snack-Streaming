import { React, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Auth/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Auth/Dashboard";
import Login from "./components/Auth/Login";
import PrivateRoute from "./contexts/PrivateRoute";
import ForgotPassword from "./components/Auth/ForgotPassword";
import UpdateProfile from "./components/Auth/UpdateProfile";
import Homepage from "./components/Homepage";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import NavBar from "./components/navBar/navBar"

/*               <PrivateRoute path="/update-profile" element={UpdateProfile} />
 */

function App() {
  return (
    <>
      <Container className="d-flex" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            {/* <Header></Header> */}
            <NavBar></NavBar>
            <AuthProvider>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                ></Route>
                <Route
                  path="/update-profile"
                  element={
                    <PrivateRoute>
                      <UpdateProfile />
                    </PrivateRoute>
                  }
                >

                </Route>
                <Route path="/signup" element={<Signup />} />
                <Route path="/movies" element={<MovieList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/checkout" element={<PrivateRoute>
                  <Checkout />

                </PrivateRoute>} />

                
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </>
  );
}

export default App;
