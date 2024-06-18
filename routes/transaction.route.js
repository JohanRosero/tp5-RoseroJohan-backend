const transactionCtrl = require('../controllers/transaction.controller');
const express = require('express');

const router = express.Router();

router.get('/', transactionCtrl.getTransactions);
router.post('/', transactionCtrl.createTransaction);
router.get('/currency/:currency', transactionCtrl.getTransactionByCurrency);
router.get('/email/:email', transactionCtrl.getTransactionsByEmail);
router.get('/filter', transactionCtrl.getTransactionByOriginDestiny);

module.exports = router;
