const mongoose = require('mongoose');
const { Schema } = mongoose;
const Spectator = require('../models/spectator');
const Categoria = require('../models/categoria');
const TicketSchema = new Schema({
    precioTicket: { type: String, required: true },
    categoriaEspectador: { type: String, required: true },
    fechaCompra: { type: String, required: true },
    espectador: { type: Schema.Types.ObjectId, ref: Spectator, required: true },
    tipoCategoria: { type: Schema.Types.ObjectId, ref: Categoria, required: true }
});
module.exports = mongoose.model.Spectator || mongoose.model('Ticket', TicketSchema);
/* Ticket
- precioTicket: Number
- categoriaEspectador: String
- fechaCompra: String // gestinar fecha como string
- espectador: Espectador (Schema.Types.ObjectId)
categoría del espectador puede ser: e = 
Extranjero, l = local */