import axios from 'axios';
import { HOST } from './config';
import { getDate } from '../utilities/dateFormat';

export async function getATMtransactions() {
  try {
    const response = await axios.post(`${HOST}/atm_transaction`);
    // change full date string to ISO format, yyyy-MM-DD
    for (let key in response.data) {
      const newDate = getDate(response.data[key].date);
      response.data[key].date = newDate;
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get ATM Transactions list!');
  }
}

export async function addATMTransaction(newTransaction) {
  try {
    const response = await axios.post(`${HOST}/atm_transaction/add`, newTransaction);
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to add to ATM Transactions list!');
  }
}

// export async function updateCustomer(updatedCustomer) {
//   try {
//     console.log(updatedCustomer);
//     const response = await axios.put(
//       `${HOST}/customers/${updatedCustomer.customerId}`,
//       updatedCustomer
//     );
//   } catch (err) {
//     console.log(err);
//     return await Promise.reject('Failed to update customer!');
//   }
// }

export async function getATMtransaction(transaction_id) {
  try {
    const response = await axios.get(`${HOST}/atm_transaction/${transaction_id}`);
    // console.log(response.data);
    response.data.date = getDate(response.data.date);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get the ATM Transaction!');
  }
}

// method to show time correctly