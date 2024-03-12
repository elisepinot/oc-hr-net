import './App.css';
import Home from './pages/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './pages/employeeList/employeeList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employee-list' element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
