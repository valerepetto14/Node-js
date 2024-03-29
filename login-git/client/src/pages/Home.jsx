import React from "react";
import Button from 'react-bootstrap/Button';

import '../styles/home.css'

const Home = () => {

    const github = () => {
        window.open("http://54.94.125.72:5000/auth/github", "_self");
      };
      
    return (
        <div className="home">
            <h1>Welcome</h1>
            <Button variant="secondary" onClick={github}>
                Log in with Github
            </Button>{' '}
        </div>
    )
}

export default Home