const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
require("dotenv").config();

const app = express();
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("port", process.env.PORT);

module.exports = app;
