import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Login from './pages/login/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
