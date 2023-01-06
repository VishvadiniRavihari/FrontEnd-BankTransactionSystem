import logo from './logo.svg';
import './App.css';
import CustomerReg from './forms/CustomerRegistration';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import EmployeeHome from './pages/EmployeePortal/EmployeeHome';
function App() {
  return (
    <div className="App"> 
    <h1>hello</h1>
    <BrowserRouter>
        <Routes>
          <Route path = '/EmployeePortal'>
            <Route exact path = '/EmployeePortal' element = {<EmployeeHome/>}/>
              <Route path = 'customer-register' element = {<CustomerReg/>} />
          </Route>
          
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
