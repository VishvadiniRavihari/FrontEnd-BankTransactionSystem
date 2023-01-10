import logo from './logo.svg';
import './App.css';
import CustomerReg from './forms/CustomerRegistration';
import CustomerSet from './forms/CustomerSet';
import LoanApply from './forms/LoanApplying';
import LoanCustomerReg from './forms/LoanRegistration';

import CurrAccountReg from './forms/CurrAccountRegistration';
import SavAccountReg from './forms/SavAccountRegistration';
import FDCustomerReg from './forms/FDRegistration';

import ATMTransactionReg from './forms/ATMTransfer';
import OnlineTransactionReg from './forms/OnlineTransfer';

import {BrowserRouter, Route,Routes} from 'react-router-dom';
import EmployeeHome from './pages/EmployeeHome';
import CustomerHome from './pages/CustomerHome';


function App() {
  return (
    <div className="App"> 
    <h1>Our Bank</h1>
    <BrowserRouter>
        <Routes>
          <Route path = '/EmployeePortal'>
            <Route exact path = '/EmployeePortal' element = {<EmployeeHome/>}/>
              {/* <Route path = 'customer-register' element = {<CustomerReg/>} /> */}
              {/* <Route path = 'customer-set' element = {<CustomerSet/>} /> */}
              <Route path = 'currAcc-Reg' element= {<CurrAccountReg/>}/>
              <Route path = 'savAcc-Reg' element= {<SavAccountReg/>}/>
              <Route path = 'loan-apply' element= {<LoanApply/>}/>
              <Route path = 'Loan-Reg' element= {<LoanCustomerReg/>}/>
              <Route path = 'FD-Reg' element= {<FDCustomerReg/>}/>
              <Route path = 'ATMTran-Reg' element= {<ATMTransactionReg/>}/>
            </Route>

          <Route path = '/CustomerPortal'>
            <Route exact path = '/CustomerPortal' element = {<CustomerHome/>}/>
            <Route path = 'Customer-Reg' element= {<CustomerReg/>}/>
            <Route path = 'OnlineTran-Reg' element= {<OnlineTransactionReg/>}/>
          </Route>
          
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
