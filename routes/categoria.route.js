//defino controlador para el manejo de CRUD
const categoriaCtrl = require('./../controllers/categoria.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.post('/', categoriaCtrl.createCategoria);
router.get('/', categoriaCtrl.getCategorias);

//exportamos el modulo de rutas
module.exports = router;