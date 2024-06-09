const express = require("express");
const cors = require('cors');
const { mongoose } = require('./database');

let app = express();

//middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));
//Cargamos el modulo de direccionamiento de rutas
app.use('/api/product', require('./routes/product.route'));
app.use('/api/transaction', require('./routes/transaction.route'));
app.use('/api/spectator', require('./routes/spectator.route'));
app.use('/api/ticket', require('./routes/ticket.route'));

//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});
