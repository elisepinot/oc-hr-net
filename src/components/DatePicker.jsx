import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

function CustomDatePicker({ initialDate, onChange }) {
  const [date, setDate] = useState(initialDate);

  // A chaque changement de date, on met à jour l'état local
  const handleDateChange = (newDate) => {
    setDate(newDate); // Met à jour l'état local
    onChange(newDate); // Appelle la fonction onChange passée en props
  };

  return <DatePicker onChange={handleDateChange} value={date} format='MM-dd-y' locale='en' />;
}

export default CustomDatePicker;
