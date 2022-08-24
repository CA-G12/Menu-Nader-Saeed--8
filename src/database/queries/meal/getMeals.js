const connection = require("../../config/connection");

const getMeals = () => {
  return connection.query("select * from meals;");
};

module.exports = getMeals;
