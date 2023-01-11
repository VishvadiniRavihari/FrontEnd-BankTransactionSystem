import axios from 'axios';
import { HOST } from './config';

export async function getBranches() {
  try {
    const response = await axios.post(`${HOST}/branch`);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get branches list!');
  }
}

export async function addBranch(newBranch) {
  try {
    const response = await axios.post(`${HOST}/branch/add`, newBranch);
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to add to branches list!');
  }
}


export async function getBranch(branch_code) {
  try {
    const response = await axios.get(`${HOST}/branch/${branch_code}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get the branch!');
  }
}