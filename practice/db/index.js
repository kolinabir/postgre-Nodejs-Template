const pg = require("pg");

const { Pool } = pg;
const pool = new Pool({
  user: "postgres",
  password: "1111",
  host: "localhost",
  port: 5432,
  database: "yelp",
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
