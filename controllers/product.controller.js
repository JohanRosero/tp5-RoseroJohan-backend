const Product = require('../models/product');
const productCtrl = {};

productCtrl.getProducts = async (req, res) => {
    let products = await Product.find();
    res.json(products);
}
productCtrl.getProminentProducts = async (req, res) => {
    let products = await Product.find({ destacado: true });
    res.json(products);
}
productCtrl.createProduct = async (req, res) => {
    let product = new Product(req.body);
    try {
        await product.save();
        res.status(200).json({
            'status': '0',
            'message': 'Product created successfully'
        });
    } catch (error) {
        res.status(400).json({
            'status': '1',
            'message': 'Error creating product'
        });
    }
}
productCtrl.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            'status': '0',
            'message': 'Product deleted successfully'
        });
    } catch (error) {
        res.status(400).json({
            'status': '1',
            'message': 'Error deleting product'
        })
    }
}
productCtrl.editProduct = async (req, res) => {
    try {
        await Product.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json({
            'status': '0',
            'message': 'Product updated successfully'
        });
    } catch (error) {
        return res.status(400).json({
            'status': '1',
            'message': 'Error updating product'
        })
    }
}
module.exports = productCtrl;

/* Dar de alta un Producto (POST)
- Recuperar TODOS los productos (GET)
- Eliminar un producto (DELETE)
- Modificar un producto (PUT)
- Recuperar los productos DESTACADOS
(GET)
 */