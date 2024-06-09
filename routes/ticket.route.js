const ticketCtrl = require('../controllers/ticket.controller');
const express = require('express');

const router = express.Router();

router.get('/', ticketCtrl.getTickets);
router.delete('/:id', ticketCtrl.deleteTicket);
router.put('/:id', ticketCtrl.updateTicket);
router.get('/category/:category', ticketCtrl.getByCategory);
router.post('/', ticketCtrl.createTicket);
router.put('/:id', ticketCtrl.updateTicket);

module.exports = router;