const getMeals = require("../../database/queries/meal/getMeals");
const getMealsC = (req, res, next) => {
  getMeals()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
module.exports = getMealsC;
