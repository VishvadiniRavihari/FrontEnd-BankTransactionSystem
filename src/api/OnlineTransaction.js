import axios from 'axios';
import { HOST } from './config';
import { getDate } from '../utilities/dateFormat';

export async function getOnlinetransactions() {
  try {
    const response = await axios.post(`${HOST}/online_transaction`);
    // change full date string to ISO format, yyyy-MM-DD
    for (let key in response.data) {
      const newDate = getDate(response.data[key].date);
      response.data[key].date = newDate;
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get online Transactions list!');
  }
}

export async function addOnlineTransaction(newTransaction) {
  try {
    const response = await axios.post(`${HOST}/online_transaction/add`, newTransaction);
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to add to Online Transactions list!');
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

export async function getOnlinetransaction(transaction_id) {
  try {
    const response = await axios.get(`${HOST}/online_transaction/${transaction_id}`);
    // console.log(response.data);
    response.data.date = getDate(response.data.date);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get the online Transaction!');
  }
}

// method to show time correctly