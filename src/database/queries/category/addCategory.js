const createConnection = require('../../config/connection');

const addCategoriesID = (name,description) => {
  return createConnection.query('INSERT INTO categories (name, description) VALUES ($1, $2)',[name, description]);
};

module.exports =  addCategoriesID;
