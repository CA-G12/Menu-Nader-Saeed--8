const deletMeal = require("../../database/queries/meal/deletMeal");
const deletMealC = (req, res, next) => {
  const { id } = req.params;

  deletMeal(id)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
module.exports = deletMealC;
