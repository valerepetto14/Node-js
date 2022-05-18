const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost' ,
    database: 'usuarios',
    user: 'root',
    password: ''
});

conexion.connect(function(error){
    if (error){
        throw error;
    }else{
        console.log("CONEXION EXITOSA")
    }
});

function mostrar(){
    conexion.query('SELECT * FROM personas', function (error, filas,) {
        if (error)
            throw error;

        filas.forEach(fila => {
            console.log(fila);
    });
    });
}

conexion.query('INSERT INTO personas (nombre, apellido) VALUES ("florencia", "alves")', function (error, results) {
    if (error)
        throw error;
    else{
        console.log("AGREGADO",results);
    }
});

mostrar();
conexion.end();