import axios from 'axios';
import { HOST } from './config';

export async function getATMs() {
  try {
    const response = await axios.post(`${HOST}/atm`);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get ATMs list!');
  }
}

export async function addATM(newATM) {
  try {
    const response = await axios.post(`${HOST}/atm/add`, newATM);
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to add to ATMs list!');
  }
}


export async function getATM(atm_id) {
  try {
    const response = await axios.get(`${HOST}/atm/${atm_id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get the ATM!');
  }
}