import "./app.css";
import axios from "axios"
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
axios.defaults.withCredentials = true
 
const App = () => {
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
  }, 
  []);
  
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route
          path="/"
          element={user ? <Menu></Menu> : <Home />}
        />
         <Route
          path="/menu"
          element={<Menu></Menu>}
        />
      </Routes>
    </div>
  </BrowserRouter>
  );
};

export default App;
