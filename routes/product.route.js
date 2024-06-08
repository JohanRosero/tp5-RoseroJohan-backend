//defino controlador para el manejo de CRUD
const productCtrl = require('./../controllers/product.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.post('/', productCtrl.createProduct);
router.get('/', productCtrl.getProducts);
router.delete('/:id', productCtrl.deleteProduct);
router.put('/:id', productCtrl.editProduct);
router.get('/:destacado', productCtrl.getProminentProducts);

//exportamos el modulo de rutas
module.exports = router;