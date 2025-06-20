const Pool = require("pg").Pool;

require("dotenv").config(); //load .env file

const pool = new Pool({
    user: "postgres",
    password: process.env.DB_PASSWORD,
    host: "localhost",
    port: "5432",
    database: "perntodo"
})

module.exports = pool;