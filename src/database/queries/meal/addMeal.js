const connection = require("../../config/connection");

const addMeal = (mealName, image, description, category_id) => {
  console.log(mealName, image, description, category_id, "queiryyy");
  return connection.query(
    "INSERT INTO meals(name, image, description, category_id) VALUES($1,$2,$3,$4) RETURNING *;",
    [mealName, image, description, category_id]
  );
};

module.exports = addMeal;
