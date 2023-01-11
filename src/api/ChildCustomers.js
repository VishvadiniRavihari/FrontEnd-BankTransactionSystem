import axios from 'axios';
import { HOST } from './config';
import { getDate } from '../utilities/dateFormat';

export async function getChildCustomers() {
  try {
    const response = await axios.post(`${HOST}/child_customer`);
    // change full date string to ISO format, yyyy-MM-DD
    for (let key in response.data) {
      const newDate = getDate(response.data[key].date_of_birth);
      response.data[key].date_of_birth = newDate;
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get Child customers list!');
  }
}

export async function addChildCustomer(newChildCustomer) {
  try {
    const response = await axios.post(`${HOST}/child_customer/add`, newChildCustomer);
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to add to Child customers list!');
  }
}


export async function getChildCustomer(customer_id) {
  try {
    const response = await axios.get(`${HOST}/child_customer/${customer_id}`);
    // console.log(response.data);
    response.data.date_of_birth = getDate(response.data.date_of_birth);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get the Child customer!');
  }
}