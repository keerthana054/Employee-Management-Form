// App.js
import React, { useState, useEffect } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeTable from './EmployeeTable';

const App = () => {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const fetchEmployeeData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/getEmployees');
      const data = await response.json();
      setEmployeeList(data);
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };

  const addEmployee = async (newEmployee) => {
    try {
      const response = await fetch('http://localhost:5000/api/addEmployee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmployee),
      });

      if (response.ok) {
        fetchEmployeeData();
      } else {
        console.error('Error adding employee data:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding employee data:', error);
    }
  };

  return (
    <div>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeTable employees={employeeList} />
    </div>
  );
};

export default App;
