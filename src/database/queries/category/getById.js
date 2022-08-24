const createConnection = require('../../config/connection');

const getCategoriesID = (id) => {
  return createConnection.query("select * from categories where id =$1", [id]);
};

module.exports = getCategoriesID ;
