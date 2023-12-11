// fetchData.js
const pool = require('./db');

const fetchDataQuery = `
  SELECT * FROM employees
`;

pool.query(fetchDataQuery, (err, results) => {
  if (err) {
    console.error('Error fetching employee data:', err);
  } else {
    console.log('Employee data fetched successfully');
    console.log('Results:', results);
  }
  pool.end();
});
