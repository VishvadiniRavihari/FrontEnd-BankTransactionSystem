import axios from 'axios';
import { HOST } from './config';
import { getDate } from '../utilities/dateFormat';

export async function getIndividualCustomers() {
  try {
    const response = await axios.post(`${HOST}/individual_customer`);
    // change full date string to ISO format, yyyy-MM-DD
    for (let key in response.data) {
      const newDate = getDate(response.data[key].date_of_birth);
      response.data[key].date_of_birth = newDate;
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get individual customers list!');
  }
}

export async function addIndividualCustomer(newIndividualCustomer) {
  try {
    const response = await axios.post(`${HOST}/individual_customer/add`, newIndividualCustomer);
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to add to Individual customers list!');
  }
}


export async function getIndividualCustomer(customer_id) {
  try {
    const response = await axios.get(`${HOST}/individual_customer/${customer_id}`);
    // console.log(response.data);
    response.data.date_of_birth = getDate(response.data.date_of_birth);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get the Individual customer!');
  }
}