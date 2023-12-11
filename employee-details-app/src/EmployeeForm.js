// EmployeeForm.js
import React, { useState } from 'react';
import apiEndpoint from './config'; // Adjust the path based on your project structure

const EmployeeForm = ({ addEmployee }) => {
  const [employee, setEmployee] = useState({
    name: '',
    department: '',
    designation: '',
    salary: '',
    dob: '',
    address: '',
    age: null,
  });

  const [jobTitle, setJobTitle] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));

    if (name === 'dob') {
      const birthDate = new Date(value);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - birthDate.getFullYear();
      setEmployee((prevEmployee) => ({
        ...prevEmployee,
        age,
      }));
    }
  };

  const generateJobTitle = () => {
    const jobTitles = [
      'Senior Developer',
      'Creative Designer',
      'Data Scientist',
      'Marketing Guru',
      'Product Manager',
      'UX/UI Specialist',
      'AI Engineer',
      'Chief Happiness Officer',
    ];

    const randomIndex = Math.floor(Math.random() * jobTitles.length);
    setJobTitle(jobTitles[randomIndex]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiEndpoint}/addEmployee`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...employee, jobTitle }),
      });

      if (response.ok) {
        // Handle successful response (optional)
        // Clear form fields
        setEmployee({
          name: '',
          department: '',
          designation: '',
          salary: '',
          dob: '',
          address: '',
          age: null,
        });
        setJobTitle('');
      } else {
        // Handle error response
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Employee Details Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for employee details */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          placeholder="Enter your full name"
        />

        <label>Department:</label>
        <input
          type="text"
          name="department"
          value={employee.department}
          onChange={handleChange}
          placeholder="Enter your department"
        />

        <label>Designation:</label>
        <input
          type="text"
          name="designation"
          value={employee.designation}
          onChange={handleChange}
          placeholder="Enter your designation"
        />

        <label>Salary:</label>
        <input
          type="text"
          name="salary"
          value={employee.salary}
          onChange={handleChange}
          placeholder="Enter your salary"
        />

        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={employee.dob}
          onChange={handleChange}
          placeholder="Select your date of birth"
        />

        {employee.age !== null && <p>Age: {employee.age}</p>}

        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={employee.address}
          onChange={handleChange}
          placeholder="Enter your address"
        />

        <label>Generated Job Title:</label>
        <p>{jobTitle}</p>

        <button type="button" onClick={generateJobTitle}>
          Generate Job Title
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
