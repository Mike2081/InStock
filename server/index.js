const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
let warehouseInv = require('./warehouse-inventory');
let inventoryItems = require('./inventory');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', warehouseInv);
app.use('/', inventoryItems);

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(8080, () => {
	console.log('listening on 8080');
});
