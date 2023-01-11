import axios from 'axios';
import { HOST } from './config';

export async function getCustomers() {
  try {
    const response = await axios.post(`${HOST}/customer`);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get customers list!');
  }
}

export async function addCustomer(newCustomer) {
  try {
    const response = await axios.post(`${HOST}/customer/add`, newCustomer);
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to add to customers list!');
  }
}


export async function getCustomer(customer_id) {
  try {
    const response = await axios.get(`${HOST}/customer/${customer_id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get the customer!');
  }
}