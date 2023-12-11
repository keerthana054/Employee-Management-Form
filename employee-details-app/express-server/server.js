// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const employees = []; // In-memory storage for simplicity (replace with a database in a real-world scenario)

// Route for submitting employee data
app.post('/submitEmployee', (req, res) => {
  const newEmployee = req.body;
  employees.push(newEmployee);
  res.status(201).json({ message: 'Employee data submitted successfully' });
});

// Route for fetching all employees
app.get('/getEmployees', (req, res) => {
  res.json(employees);
});
