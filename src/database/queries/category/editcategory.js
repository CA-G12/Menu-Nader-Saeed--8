const createConnection = require('../../config/connection');

const editCategoriesID = (id, name, description) => {
  return createConnection.query(
    "UPDATE meals SET name = $1 ,description= $2, WHERE id = $3",
    [name, description, id]
  );
};

module.exports =  editCategoriesID ;
