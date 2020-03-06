//Un modelo representa a un documento de la coleccion 
//de la base de datos

'use strict'

//Se importa el modulo mongoose
var mongoose = require('mongoose');
//esquema de un modelo
var Schema = mongoose.Schema;
//Esquema de project, objeto molde, se pasa un objeto Json con las propiedades
var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs : String,
    image : String
});

module.exports = mongoose.model('Project', ProjectSchema);
//mongoose agrega el primer parametro como coleccion, lo pone en minusculas y lo pluraliza
//entonces: projects --> guarda los documentos en la coleccion