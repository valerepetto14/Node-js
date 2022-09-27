import React from "react";
import axios from "axios"
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import '../styles/home.css'

axios.defaults.withCredentials = true

const Menu = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
    fetch("http://54.94.125.72:5000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      })
      .then((resObject) => {
        setUser(resObject.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
    getUser();
  }, []);
    const logout = () => {
        window.open("http://54.94.125.72:5000/auth/logout", "_self");
        document.cookie = "session=; max-age=0";
      };
    
    if (!user) {
      return <h1>cargando....</h1>
    }
    return (
        <div className="home">
          <NavBar user={user}></NavBar>
            <img
              src={user.photos[0].value}
              alt=""
              className="avatar"
            />
            <h1>{user.displayName}</h1>
            <Button onClick={() => console.log(user)}>ver data</Button>
            <Button onClick={logout}>Logout</Button>
        </div>
    )
}



export default Menu;