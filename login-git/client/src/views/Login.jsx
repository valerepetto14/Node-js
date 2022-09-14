import React from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios'

import '../styles/login.css'

const Login = () => {
    return (
        <form className="login">
            <h1>Login</h1>
            <input placeholder="  Username"></input>
            <input placeholder="  Passwordd"></input>
            <Button>Login</Button>
        </form>
    )
}

export default Login