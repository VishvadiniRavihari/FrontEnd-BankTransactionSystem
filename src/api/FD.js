import axios from 'axios';
import { HOST } from './config';
import { getDate } from '../utilities/dateFormat';

export async function getFDCustomers() {
  try {
    const response = await axios.post(`${HOST}/fixed_deposit`);
    // change full date string to ISO format, yyyy-MM-DD
    for (let key in response.data) {
      const newDate = getDate(response.data[key].date_opened);
      response.data[key].date_opened = newDate;
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get FDcustomers list!');
  }
}

export async function addFDCustomer(newFDCustomer) {
  try {
    const response = await axios.post(`${HOST}/fixed_deposit/add`, newFDCustomer);
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to add to FDcustomers list!');
  }
}

// export async function updateFDCustomer(updatedFDCustomer) {
//   try {
//     console.log(updatedFDCustomer);
//     const response = await axios.put(
//       `${HOST}/fixed_deposit/${updatedFDCustomer.customer_id}`,
//       updatedFDCustomer
//     );
//   } catch (err) {
//     console.log(err);
//     return await Promise.reject('Failed to update customer!');
//   }
// }

export async function getFDCustomer(fd_id) {
  try {
    const response = await axios.get(`${HOST}/fixed_deposit/${fd_id}`);
    // console.log(response.data);
    response.data.date_opened = getDate(response.data.date_opened);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get the customer!');
  }
}