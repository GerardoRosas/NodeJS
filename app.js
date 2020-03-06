//configuracion de express y bodyparser
'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//archivos de Rutas
var project_routes = require('./routes/project');

//middleware
//metodo que se ejecuta antes de ejecutar la accion del controlador

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Rutas
app.use('/api', project_routes);

//Exportar ya que es un modulo de nodeJS
module.exports = app;

