const { default: mongoose } = require('mongoose');
const Categoria = require('../models/categoria');
const categoriaCtrl = {};

categoriaCtrl.createCategoria = async (req, res) => {
    let categoria = new Categoria(req.body);
    try {
        await categoria.save();
        res.status(200).json({
            'status': '0',
            'message': 'categoria created successfully'
        });
    } catch (error) {
        res.status(400).json({
            'status': '1',
            'message': 'Error creating categoria'
        });
    }
}

categoriaCtrl.getCategorias = async (req, res) => {
    let categorias = await Categoria.find();
    res.json(categorias);
}

module.exports = categoriaCtrl;



