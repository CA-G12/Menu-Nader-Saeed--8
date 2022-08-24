const addmeal = require("./addMeal");
const deleteMeal = require("./deleteMeal");
const editMeal = require("./editMeal");
const getMeal = require("./editMeal");
const getMeals = require("./getMeals");

const MealController = {
  addmeal,
  deleteMeal,
  editMeal,
  getMeal,
  getMeals,
};
module.exports = MealController;
