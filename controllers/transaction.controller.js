const Transaction = require('../models/transaction');
const transactionCtrl = {};

transactionCtrl.getTransactionByCurrency = async (req, res) => {
    let transactions = await Transaction.find({
        $or: [
            { monedaOrigen: req.params.currency },
            { monedaDestino: req.params.currency }
        ]
    });
    res.json(transactions);
}
transactionCtrl.getTransactionByOriginDestiny = async (req, res) => {
    try {
        let transactions = await Transaction.find({
            $and: [
                { monedaOrigen: req.query.origin },
                { monedaDestino: req.query.destiny }
            ]
        });
        res.json(transactions);
    } catch (error) {
        res.status(500).send(error);
    }
}


transactionCtrl.getTransactions = async (req, res) => {
    let transactions = await Transaction.find();
    res.json(transactions);
}
transactionCtrl.getTransactionsByEmail = async (req, res) => {
    let transactions = await Transaction.find({ emailCliente: req.params.email });
    res.json(transactions);
}

transactionCtrl.createTransaction = async (req, res) => {
    let transaction = new Transaction(req.body);
    try {
        console.log(transaction);
        await transaction.save();
        res.status(200).json({
            'status': 'success',
            'message': 'transaction Log created successfully'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'message': 'Error creating log transaction'
        });
    }
}

module.exports = transactionCtrl;
