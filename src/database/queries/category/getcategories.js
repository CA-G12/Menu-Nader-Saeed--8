const createConnection = require('../../config/connection');

const getCategories = () => {
  return createConnection.query("select * from categories");
};

module.exports = getCategories;
