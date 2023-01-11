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
import EmployeeReg from './forms/EmployeeRegistration';
import IndividualCustomerReg from './forms/IndividualCustomerReg';
import ChildCustomerReg from './forms/ChildCustomerRegistration';
import OrgCustomerReg from './forms/OrgCustomerRegistration';
import BranchReg from './forms/BranchRegistration';
import ATMReg from './forms/ATMRegistration';
import EmployeeSet from './forms/EmployeeSet';
import CustomerHome from './pages/CustomerHome';
import CustomerPortfolio from './forms/CustomerPortfolio';
import CustomerUser from './forms/CustomerUser';


function App() {
  return (
    <div className="App"> 
    <h1>Our Bank</h1>
    <BrowserRouter>
        <Routes>
          <Route path = '/EmployeePortal'>
            <Route exact path = '/EmployeePortal' element = {<EmployeeHome/>}/>
              <Route path = 'currAcc-Reg' element= {<CurrAccountReg/>}/>
              <Route path = 'savAcc-Reg' element= {<SavAccountReg/>}/>
              <Route path = 'Loan-Reg' element= {<LoanCustomerReg/>}/>
              <Route path = 'FD-Reg' element= {<FDCustomerReg/>}/>
              <Route path = 'ATMTran-Reg' element= {<ATMTransactionReg/>}/>

              <Route path = 'individual-customer-register' element = {<IndividualCustomerReg/>} />
              <Route path = 'child-customer-register' element = {<ChildCustomerReg/>} />
              <Route path = 'customer-register' element = {<CustomerReg/>} />
              <Route path = 'customer-set' element = {<CustomerSet/>} />
              <Route path = 'employee-register' element = {<EmployeeReg/>} />
              <Route path = 'oragnization-customer-register' element = {<OrgCustomerReg/>} />
              <Route path = 'branch-register' element = {<BranchReg/>} />
              <Route path = 'atm-register' element = {<ATMReg/>} />
              <Route path = 'employee-set' element = {<EmployeeSet/>} />
            </Route>

          <Route path = '/CustomerPortal'>
            <Route exact path = '/CustomerPortal' element = {<CustomerHome/>}/>
            <Route path = 'OnlineTran-Reg' element= {<OnlineTransactionReg/>}/>
            <Route path = 'loan-apply' element= {<LoanApply/>}/>
            <Route path = 'portfolio' element = {<CustomerPortfolio/>} />
            <Route path = 'user' element = {<CustomerUser/>} />
          </Route>
          
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
