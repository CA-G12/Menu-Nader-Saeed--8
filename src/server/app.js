const compression = require("compression");
const express = require("express");
const mealRouter = require("../routes/meal/index");

require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(compression());

app.set("port", process.env.PORT);

// routes
app.use(mealRouter);

const path = require("path");

const { serverError, clientErrors } = require("../middleware/errors");

// app.use(express.static(path.join(__dirname,'..', 'public')));
app.use(express.static(path.join(__dirname, "..", "..", "public"))); // index.html

app.get("/menu", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "menu.html")); //menu.html
});
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "admin.html")); //admin.html
});

//500.html  Error page handle
app.get("/500", (req, res) => {
  throw new Error("Error");
});

app.use(clientErrors);
app.use(serverError);

module.exports = app;
