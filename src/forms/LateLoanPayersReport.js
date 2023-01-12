import React from 'react';

import { getLateLoanPayers} from '../api/LoanInstallment';
import { Table } from 'antd';

export default function LateLoanPayersList() {
  const columns = [
    {
      title: 'Branch Code',
      dataIndex: 'branch_code',
      key: 'branch_code',
    },
    
  ];

  const [lateloanpayers, setlateloanpayers] = React.useState();

  // customer list is loaded on the first component render
  React.useEffect(() => loadLateLoanPayersList(), []);

  function loadLateLoanPayersList() {
    getLateLoanPayers()
      .then((data) => {
        setlateloanpayers(data);
      })
      .catch((err) => console.log(err));
  }

  //loadCustomerList();
  //console.log(Customer);
  return (
    <div>
      <h1>Late Loan Payers Report</h1>

      {<Table dataSource={lateloanpayers} columns={columns} />}
    </div>
  );
}
