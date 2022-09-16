import React from "react";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

import '../styles/home.css'

const Home = () => {

    const github = () => {
        window.open("http://localhost:5000/auth/github", "_self");
      };
      
    return (
        <div className="home">
            <h1>Welcome</h1>
            <Button variant="secondary" onClick={github}>
                <Link className="link" to="/menu">Log in with Github</Link>
            </Button>{' '}
        </div>
    )
}



export default Home