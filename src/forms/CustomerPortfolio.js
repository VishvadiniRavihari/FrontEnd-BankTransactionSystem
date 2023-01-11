import React from 'react';

import { getCustomer } from '../api/Customers';
import { Table } from 'antd';

export default function CustomerAccsDetails() {
  const columns = [
    {
      title: 'Account No',
      dataIndex: 'account_no',
      key: 'account_no',
      //acc tables
    },
    {
      title: 'Current Balance',
      dataIndex: 'balance',
      key: 'balance',
    },
  ];

  const [customer, setCustomer] = React.useState();

  // customer list is loaded on the first component render
  React.useEffect(() => loadCustomerAccsDetails(), []);

  function loadCustomerAccsDetails() {
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
      <h1>Portfolio</h1>

      {<Table dataSource={customer} columns={columns} />}
    </div>
  );
}
