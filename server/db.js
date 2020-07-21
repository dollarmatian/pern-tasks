const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password:"T0nkp1ls0384",
    host: "localhost",
    database: "perntasks",
    port: 5432
});

module.exports = pool;
