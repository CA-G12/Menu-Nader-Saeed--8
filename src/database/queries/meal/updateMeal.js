const connection = require("../../config/connection");

const updateMeal = (id, name, image, categories, description) => {
  return connection.query(
    "UPDATE meals SET name=$1,image=$2,categories_id=$3, description=$4 where id =$5  ;"[
      (name, image, categories, description, id)
    ]
  );
};

module.exports = updateMeal;
