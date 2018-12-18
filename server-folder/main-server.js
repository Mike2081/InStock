const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
let warehouseInv = require("./warehouse-inventory");
let inventoryItems = require("./inventory");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", warehouseInv);
app.use("/", inventoryItems);

app.listen(8080, () => {
  console.log("listening on 8080");
});
