const http = require ('http');
const { Http2ServerResponse } = require('http2');
const { consumers } = require('stream');

const servidor = http.createServer(function(peticion, respuesta){
    respuesta.writeHead(200,{'content-type': 'text/html'});
    respuesta.write('<h1>hola mundo</h1>');
    console.log('peticion web');
    respuesta.end();
});

servidor.listen(3000);
console.log('ejecutando un server local con nodejs');