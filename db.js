const Pool = require("pg").Pool;
const {password, user, host, database, port } = require ('./config');

const pool = new Pool({
  user: user,
  password:  password,
  host: host,
  port: port,
  database: database,
  rejectUnauthorized: false
});

module.exports = pool;
