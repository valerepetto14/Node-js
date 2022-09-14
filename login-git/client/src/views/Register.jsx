import React from "react";
import Button from 'react-bootstrap/Button';

const Register = () => {
    return (
        <div className="register">
            <h1>Register</h1>
            <input placeholder="  Name"></input>
            <input placeholder="  Lastname"></input>
            <input placeholder="  Username"></input>
            <input placeholder="  Password"></input>
            <Button>Login</Button>
        </div>
    )
}

export default Register