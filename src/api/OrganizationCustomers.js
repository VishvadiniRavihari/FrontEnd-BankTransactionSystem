import axios from 'axios';
import { HOST } from './config';


export async function getOrgCustomers() {
  try {
    const response = await axios.post(`${HOST}/organization_customer`);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get organization customers list!');
  }
}

export async function addOrgCustomer(newOrgCustomer) {
  try {
    const response = await axios.post(`${HOST}/organization_customer/add`, newOrgCustomer);
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to add to Organization customers list!');
  }
}


export async function getOrgCustomer(customer_id) {
  try {
    const response = await axios.get(`${HOST}/organization_customer/${customer_id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get the Organization customer!');
  }
}