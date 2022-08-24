const updateMeal = require("../../database/queries/meal/updateMeal");
const updateMealC = (req, res, next) => {
  const { mealName, category_id, image, description } = req.body;
  const { id } = req.params;
  console.log(mealName, category_id, image, description, id);
  updateMeal(mealName, image, description, category_id, id)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
module.exports = updateMealC;
