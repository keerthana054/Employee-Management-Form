// insertData.js
const pool = require('./db');

const insertDataQuery = `
  INSERT INTO employees (name, department, designation, salary, dob, address)
  VALUES (?, ?, ?, ?, ?, ?)
`;

const employeeData = ['John Doe', 'IT', 'Developer', 60000, '1990-01-01', '123 Main St'];

pool.query(insertDataQuery, employeeData, (err, results) => {
  if (err) {
    console.error('Error inserting employee data:', err);
  } else {
    console.log('Employee data inserted successfully');
    console.log('Inserted ID:', results.insertId);
  }
  pool.end();
});
