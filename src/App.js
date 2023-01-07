import logo from './logo.svg';
import './App.css';
import CustomerReg from './forms/CustomerRegistration';
import CustomerSet from './forms/CustomerSet';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import EmployeeHome from './pages/EmployeeHome';

function App() {
  return (
    <div className="App"> 
    <h1>hello</h1>
    <BrowserRouter>
        <Routes>
          <Route path = '/EmployeePortal'>
            <Route exact path = '/EmployeePortal' element = {<EmployeeHome/>}/>
              <Route path = 'customer-register' element = {<CustomerReg/>} />
              <Route path = 'customer-set' element = {<CustomerSet/>} />
          </Route>
          
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
