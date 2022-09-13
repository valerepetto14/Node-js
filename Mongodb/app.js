const express = require('express')
const app = express()
const router = require('./routes/routes')
require("dotenv").config();
const mongoose = require("mongoose");

app.use('/', router)

//conexion
mongoose
.connect(process.env.CONEXION)
.then(()=> console.log("conexion exitosa a mongo db"))
.catch(error => console.log(error))

app.listen('3000', ()=>{
    console.log("app esuchando en el puerto 3000")
})