import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

import '../styles/home.css'

const Menu = ({user}) => {

    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
        document.cookie = "session=; max-age=0";
      };
    return (
        <div className="home">
            <img
              src={user.photos[0].value}
              alt=""
              className="avatar"
            />
            <h1>{user.displayName}</h1>
            <Button onClick={logout}>Logout</Button>
        </div>
    )
}



export default Menu