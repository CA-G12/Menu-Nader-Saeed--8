const createConnection = require('../../config/connection');

const deletCategoriesID = (id) => {
  return createConnection.query("DELETE FROM meals WHERE id = $1", [id]);
};

module.exports =  deletCategoriesID ;
