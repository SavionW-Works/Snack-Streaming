import React from "react";
import{Nav, NavLink, NavMenu} from "./navStyle";




export const navContext = () =>{
    return(
        <Nav>
            <NavMenu>
                <NavLink to='/' activeStyle >
                    Home
                </NavLink>
                <NavLink to='/movies' activeStyle >
                    Movies
                </NavLink>
                <NavLink to='/dashboard' activeStyle >
                    Dashboard

                </NavLink>
                <NavLink to='/login' activeStyle >
                    Login

                </NavLink>
                <NavLink to='/signup' activeStyle >
                    Signup

                </NavLink>
                <NavLink to='/checkout' activeStyle >
                    Checkout

                </NavLink>
            </NavMenu>
        </Nav>

    )
}

