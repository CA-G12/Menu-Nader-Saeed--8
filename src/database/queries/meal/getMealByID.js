const connection = require("../../config/connection");

const getMeal = (id) => {
  return connection.query("select * from meals where id = $1;", [id]);
};

module.exports = getMeal;
