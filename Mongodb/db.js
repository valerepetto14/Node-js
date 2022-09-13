const mongoose = require("mongoose");

//conexion
const conexion = mongoose
.connect(process.env.CONEXION)
.then(()=> console.log("conexion exitosa a mongo db"))
.catch(error => console.log(error))

module.export=conexion;