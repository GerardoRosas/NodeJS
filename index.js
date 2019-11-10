'use strict'

//Se importa el modulo de mongoose
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

//Conexion a la BD
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
        .then(()=>{
            console.log("Conexion a la Base de datos establecida con exito");

            //Creacion del servidor
            app.listen(port, () => {
                console.log("Servidor Corriendo correctamente en la url: localhots: 3700");
            })
        })
        .catch(err => console.log(err));