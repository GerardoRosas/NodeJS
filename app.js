'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//archivos de Rutas

//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Rutas
app.get('/test', (req, res) => {
    res.status(200).send({
        message: "Hola mundo desde mi API de NodeJS"
    })
})
//Exportar
module.exports = app;

