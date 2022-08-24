const addMealQuery = require("../../database/queries/meal/addMeal");
const addMealC = (req, res, next) => {
  const { mealName, category_id, image, description } = req.body;
  console.log(mealName, category_id, image, description);
  addMealQuery(mealName, image, description, category_id)
    .then((data) => {
      console.log(data.rows);
      res.json(data.rows);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
module.exports = addMealC;
