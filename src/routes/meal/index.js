const mealController = require("../../controller/meal/index");
const Router = require("express").Router();

Router.post("/meals", mealController.addmeal);
module.exports = Router;
