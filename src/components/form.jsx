import './form.css';
export default function Form() {
  return (
    <div>
      <form action='#' id='create-employee'>
        <label for='first-name'>First Name</label>
        <input type='text' id='first-name'></input>

        <label for='last-name'>Last Name</label>
        <input type='text' id='last-name'></input>

        <label for='date-of-birth'>Date of Birth</label>
        <input id='date-of-birth' type='text'></input>

        <label for='start-date'>Start Date</label>
        <input id='start-date' type='text'></input>

        <fieldset class='address'>
          <legend>Address</legend>

          <label for='street'>Street</label>
          <input id='street' type='text'></input>

          <label for='city'>City</label>
          <input id='city' type='text'></input>

          <label for='state'>State</label>
          <select name='state' id='state'></select>

          <label for='zip-code'>Zip Code</label>
          <input id='zip-code' type='number' />
        </fieldset>

        <label for='department'>Department</label>
        <select name='department' id='department'>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </form>
      <button onclick='saveEmployee()'>Save</button>{' '}
    </div>
  );
}
