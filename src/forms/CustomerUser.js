import React from 'react';

import { getCustomer } from '../api/Customers';
import { Table } from 'antd';

export default function CustomerDetails() {
  const columns = [
    {
      title: 'Customer ID',
      dataIndex: 'customer_id',
      key: 'customer_id',
    },
    {
      title: 'Contact No',
      dataIndex: 'contact_no',
      key: 'contact_no',
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
  ];

  const [customer, setCustomer] = React.useState();

  // customer list is loaded on the first component render
  React.useEffect(() => loadCustomerDetails(), []);

  function loadCustomerDetails() {
    getCustomer()
      .then((data) => {
        setCustomer(data);
      })
      .catch((err) => console.log(err));
  }

  //loadCustomerList();
  //console.log(Customer);
  return (
    <div>
      <h1>User</h1>

      {<Table dataSource={customer} columns={columns} />}
    </div>
  );
}
