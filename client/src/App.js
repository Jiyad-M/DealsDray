import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import CreateEmp from './pages/createEmp/CreateEmp';
import EmpEdit from './pages/empEdit/EmpEdit';
import EmpList from './pages/empList/EmpList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/signup" element={<Signup />} />
          <Route  path="/create-emp" element={<CreateEmp />} />
          <Route  path="/emp-edit" element={<EmpEdit />} />
          <Route  path="/emp-list" element={<EmpList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
