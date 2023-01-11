import React from 'react';

import { getEmployees } from '../api/Employees';
import { Table } from 'antd';

export default function EmployeeList() {
  const columns = [
    {
      title: 'Employee ID',
      dataIndex: 'employee_id',
      key: 'employee_id',
    },
    {
      title: 'Name',  
      dataIndex: 'emp_name',
      key: 'emp_name',
    },
    {
      title: 'Branch Code', 
      dataIndex: 'branch_code',
      key: 'branch_code',
    },
    {
        title: 'Phone', 
        dataIndex: 'contact_number',
        key: 'contact_number',
    },
    {
        title: 'Email', 
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Address No', 
        dataIndex: 'address_no',
        key: 'address_no',
    },
    {
      title: 'Street', 
      dataIndex: 'street',
      key: 'street',
    },
    {
      title: 'Town', 
      dataIndex: 'town',
      key: 'town',
    },
    {
      title: 'Salary', 
      dataIndex: 'salary',
      key: 'salary',
  },
  ];

  const [employees, setEmployees] = React.useState();

  // employee list is loaded on the first component render
  React.useEffect(() => loadEmployeeList(), []);

  function loadEmployeeList() {
    getEmployees()
      .then((data) => {
        setEmployees(data);
      })
      .catch((err) => console.log(err));
  }

  //loadCustomerList();
  //console.log(Customer);
  return (
    <div>
      <h1>Employee List</h1>

      {<Table dataSource={employees} columns={columns} />}
    </div>
  );
}
