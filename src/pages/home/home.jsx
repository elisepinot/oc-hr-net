import './home.css';
import Form from '../../components/form';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div class='title'>
        <h1>HRnet</h1>
      </div>
      <div class='container'>
        <Link to='employee-list'>View Current Employees</Link>
        {/* <a href='employee-list.html'>View Current Employees</a> */}
        <h2>Create Employee</h2>
        <Form />
      </div>
    </div>
  );
}
