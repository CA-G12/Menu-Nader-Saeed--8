const connection = require("../../config/connection");

const deleteMeal = (id) => {
  return connection.query("DELETE from meals where id = $1;", [id]);
};

module.exports = deleteMeal;
