import axios from 'axios';
import { HOST } from './config';
import { getDate } from '../utilities/dateFormat';

export async function getLoanApplicants() {
  try {
    const response = await axios.post(`${HOST}/loan_application`);
    // change full date string to ISO format, yyyy-MM-DD
    //application_id
    for (let key in response.data) {
      const newDate = getDate(response.data[key].application_id);
      response.data[key].application_id = newDate;
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get loan applicants list!');
  }
}

export async function addLoanApplicant(newApplicant) {
  try {
    const response = await axios.post(`${HOST}/loan_application/add`, newApplicant);
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to add to loan applicants list!');
  }
}

export async function updateLoanApplicant(updatedApplicant) {
  try {
    console.log(updatedApplicant);
    const response = await axios.put(
      `${HOST}/loan_application/${updatedApplicant.application_id}`,
      updatedApplicant
    );
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to update the applicant!');
  }
}

export async function getLoanApplicant(id) {
  try {
    const response = await axios.get(`${HOST}/loan_application/${id}`);
    // console.log(response.data);
    // application id 
    response.data.dateofbirth = getDate(response.data.dateofbirth);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get the loan applicant!');
  }
}