import axios from 'axios';
import { HOST } from './config';
import { getDate } from '../utilities/dateFormat';

export async function getOnlineLoanCustomers() {
  try {
    const response = await axios.post(`${HOST}/online_loan_application`);
    // change full date string to ISO format, yyyy-MM-DD
    for (let key in response.data) {
      const newDate = getDate(response.data[key].dateofbirth);
      response.data[key].dateofbirth = newDate;
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get online loan customers list!');
  }
}

export async function addOnlineLoanCustomer(newCustomer) {
  try {
    const response = await axios.post(`${HOST}/online_loan_application/add`, newCustomer);
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to add to online loan customers list!');
  }
}

export async function updateOnlineLoanCustomer(updatedCustomer) {
  try {
    console.log(updatedCustomer);
    const response = await axios.put(
      `${HOST}/online_loan_application/${updatedCustomer.application_id}`,
      updatedCustomer
    );
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to update the customer!');
  }
}

export async function getOnlineLoanCustomer(application_no) {
  try {
    const response = await axios.get(`${HOST}/online_loan_application/${application_no}`);
    // console.log(response.data);
    //check
    response.data.dateofbirth = getDate(response.data.dateofbirth);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to add to online loan customers list!');
  }
}