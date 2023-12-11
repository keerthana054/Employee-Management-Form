// createTable.js
const pool = require('./db');

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    department VARCHAR(255),
    designation VARCHAR(255),
    salary DECIMAL(10, 2),
    dob DATE,
    address TEXT
  )
`;

pool.query(createTableQuery, (err) => {
  if (err) {
    console.error('Error creating employee table:', err);
  } else {
    console.log('Employee table created successfully');
  }
  pool.end();
});
