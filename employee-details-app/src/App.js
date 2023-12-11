import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeTable from './EmployeeTable';

const App = () => {
  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = (newEmployee) => {
    setEmployeeList((prevList) => [...prevList, newEmployee]);
  };

  return (
    <div>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeTable employees={employeeList} />
    </div>
  );
};

export default App;


