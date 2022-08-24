require("dotenv").config();
const { Pool } = require("pg");

if (!process.env.DB_URL) {
  throw new Error("DB_URL must be specified");
}
module.exports = new Pool({
  connectionString: process.env.DB_URL,
  ssl: false,
});
