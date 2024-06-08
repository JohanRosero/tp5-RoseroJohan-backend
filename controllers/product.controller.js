const Product = require('../models/agente');
const productCtrl = {};
productCtrl.getAgentes = async (req, res) => {
    let agentes = await Agente.find();
    res.json(agentes);
}