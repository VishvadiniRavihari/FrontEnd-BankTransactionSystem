import axios from 'axios';
import { HOST } from './config';


export async function getLateLoanPayers(branch_code) {
  try {
    const response = await axios.get(`${HOST}/loan_installment/${branch_code}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get late loan payers!');
  }
}