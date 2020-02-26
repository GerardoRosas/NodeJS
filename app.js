//configuracion de express y bodyparser
'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//archivos de Rutas

//middleware
//metodo que se ejecuta antes de ejecutar la accion del controlador

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Rutas
app.post('/test', (req, res) => {
    //Imprimimos una peticion que le enviamos por el metodo
    //Post, y el metodo body busca la key

    //req.body 
    //req.query
    //req.params

    console.log(req.body.Nombre);
    res.status(200).send({
        message: "<h1>Hola mundo desde mi API de NodeJS</h1>"
    });
});

app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Hola mundo desde mi API de NodeJS</h1>"
    );
});

//Exportar ya que es un modulo de nodeJS
module.exports = app;

