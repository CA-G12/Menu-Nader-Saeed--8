const { readFileSync } = require("fs");
const { join } = require("path");
const connection = require("../config/connection");

const dbBuild = () => {
  const createQuery = readFileSync(
    join(__dirname, "..", "config", "createTables.sql"),
    "utf-8"
  );
  connection.query(createQuery);
};
dbBuild();
module.exports = dbBuild;
