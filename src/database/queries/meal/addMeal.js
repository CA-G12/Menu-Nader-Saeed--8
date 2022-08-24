const connection = require("../../config/connection");

const addMeal = (mealName, image, description, category_id) => {
  return connection.query(
    "INSERT INTO meals(name, image, description, categories_id) VALUES ($1,$2,$3,$4) RETURNING *;",
    [mealName, image, description, category_id]
  );
};

module.exports = addMeal;
