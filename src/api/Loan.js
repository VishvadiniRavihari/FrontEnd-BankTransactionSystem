import axios from 'axios';
import { HOST } from './config';
import { getDate } from '../utilities/dateFormat';

export async function getLoanCustomers() {
  try {
    const response = await axios.post(`${HOST}/loan`);
    // change full date string to ISO format, yyyy-MM-DD
    for (let key in response.data) {
      const newDate = getDate(response.data[key].date_issued);
      response.data[key].date_issued = newDate;
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get Loancustomers list!');
  }
}

export async function addLoanCustomer(newLoanCustomer) {
  try {
    const response = await axios.post(`${HOST}/loan/add`, newLoanCustomer);
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to add to Loancustomers list!');
  }
}

// export async function updateLoanCustomer(updatedLoanCustomer) {
//   try {
//     console.log(updatedLoanCustomer);
//     const response = await axios.put(
//       `${HOST}/customers/${updatedLoanCustomer.loan_no}`,
//       updatedLoanCustomer
//     );
//   } catch (err) {
//     console.log(err);
//     return await Promise.reject('Failed to update customer!');
//   }
// }

export async function getLoanCustomer(loan_no) {
  try {
    const response = await axios.get(`${HOST}/loan/${loan_no}`);
    // console.log(response.data);
    response.data.date_issued = getDate(response.data.date_issued);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get the loan customer!');
  }
}