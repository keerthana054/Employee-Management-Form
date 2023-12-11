// server.js
const express = require('express');
const db = require('./db'); // Assuming db.js is in the same directory

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Route for submitting employee data
app.post('/submitEmployee', (req, res) => {
  const newEmployee = req.body;

  // Example SQL query to insert employee data into a 'employees' table
  const sql = 'INSERT INTO employees (name, department, designation, salary, dob, address) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [newEmployee.name, newEmployee.department, newEmployee.designation, newEmployee.salary, newEmployee.dob, newEmployee.address];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting employee data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.status(201).json({ message: 'Employee data submitted successfully' });
  });
});

// Route for fetching all employees
app.get('/getEmployees', (req, res) => {
  // Example SQL query to fetch all employees from the 'employees' table
  const sql = 'SELECT * FROM employees';

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching employees data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.json(result);
  });
});
