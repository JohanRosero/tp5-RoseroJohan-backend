const { default: mongoose } = require('mongoose');
const Ticket = require('../models/ticket');

const ticketCtrl = {};

ticketCtrl.getTickets = async (req, res) => {
    let tickets = await Ticket.find().populate('espectador');
    res.json(tickets);
}

ticketCtrl.createTicket = async (req, res) => {
    let ticket = new Ticket(req.body);
    try {
        await ticket.save();
        res.status(200).json({
            'status': 'success',
            'message': 'ticket created successfully'
        });
    } catch (error) {
        res.status(500).json({
            'status': 'error',
            'message': "Error creating ticket"
        });
    }
}

ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.findByIdAndDelete(req.params.id);
        res.status(200).json({
            'status': 'success',
            'message': 'ticket deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            'status': 'error',
            'message': "Error deleting ticket"
        });
    }
}

ticketCtrl.updateTicket = async (req, res) => {
    try {
        await Ticket.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            'status': 'success',
            'message': 'ticket updated successfully'
        });
    } catch (error) {
        res.status(500).json({
            'status': 'error',
            'message': "Error updating ticket"
        });
    }
}

ticketCtrl.getByCategory = async (req, res) => {
    let category = req.params.category;
    if (category === 'l') {
        let tickets = await Ticket.find({ categoriaEspectador: 'local' });
        res.status(200).json(tickets);
    } else if (category === 'e') {
        let tickets = await Ticket.find({ categoriaEspectador: 'extranjero' });
        res.status(200).json(tickets);
    } else {
        res.status(400).json({
            'status': '1',
            'message': 'Invalid category'
        });
    }
}

module.exports = ticketCtrl;
/* - Dar de alta un ticket (POST), enviar el espectador como 
propiedad.
- - Recuperar TODOS los ticket (GET) incluyendo la 
información de los espectadores.
- - Eliminar un ticket (DELETE)
- - Modificar un ticket (PUT)
- -Recuperar SOLO los espectadores que tienen una 
determinada categoría de espectador //extranjero-local. */