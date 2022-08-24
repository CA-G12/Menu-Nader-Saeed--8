require("dotenv").config();
const { Pool } = require("pg");

if (!process.env.DB_URL) {
  throw new Error("DB_URL must be specified");
}
if (process.env.NODE_ENV === "production") {
  module.exports = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  module.exports = new Pool({
    connectionString: process.env.DB_URL,
    ssl: false,
  });
}
