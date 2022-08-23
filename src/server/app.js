const compression = require('compression');
const express = require('express');

require("dotenv").config();


const app = express();

app.use(express.urlencoded({extended : false}));

app.use(express.json());


app.use(compression());

app.set('port', process.env.PORT)


module.exports = app;

