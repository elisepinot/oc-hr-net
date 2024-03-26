import { Link } from 'react-router-dom';
import EmployeeTable from '../../components/employeeTable';
import './employeeList.css';

export default function EmployeeList() {
  return (
    <div id='employee-div' className='container'>
      <h1>Current Employees</h1>
      <EmployeeTable />
      <Link to='/'>Home</Link>
    </div>
  );
}
