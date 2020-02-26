'use strict'

//var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
MongoClient.Promise = global.Promise;

var app = require('./app');
var port = 3700;

MongoClient.connect('mongodb://localhost:27017/portafolio', {useNewUrlParser: true, useUnifiedTopology : true}) //Hace conexión a la base de datos
        .then(() => { //Si se establece conexión se imprimer exito
            console.log("Conexion a la base de datos establecida con éxito...!!");


            //Creación del servidor
            app.listen(port, () => {
                console.log("Servidor corriendo corectamente en la URL localhost:3700");
            })
        })
        .catch( err => console.log(err)); //Por si existe un error