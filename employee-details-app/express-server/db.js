// db.js
const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'KEERTHANAS-045',
  user: 'root@localhost',
  password: 'R#ot3129_',
  database: 'employee_management',
  connectionLimit: 10,
});

module.exports = pool;
