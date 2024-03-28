import './employeeTable.css';
import DataTable from 'react-data-table-component';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function EmployeeTable() {
  const employees = useSelector((state) => state.employees.employees);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.startDate.includes(searchTerm.toLowerCase()) ||
      employee.dateOfBirth.includes(searchTerm.toLowerCase()) ||
      employee.street.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.zipCode.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const columns = [
    {
      name: 'First Name',
      selector: (row) => row.firstName,
      sortable: true,
      wrap: true,
      minwidth: '130px',
    },
    {
      name: 'Last Name',
      selector: (row) => row.lastName,
      sortable: true,
      wrap: true,
      minwidth: '130px',
    },
    {
      name: 'Start Date',
      selector: (row) => formatDate(row.startDate),
      sortable: true,
      wrap: true,
      minwidth: '130px',
    },
    {
      name: 'Department',
      selector: (row) => row.department,
      sortable: true,
      wrap: true,
      minwidth: '140px',
    },
    {
      name: 'Date of Birth',
      selector: (row) => (row.dateOfBirth ? formatDate(row.dateOfBirth) : ''),
      sortable: true,
      wrap: true,
      minwidth: '150px',
    },
    {
      name: 'Street',
      selector: (row) => row.street,
      sortable: true,
      wrap: true,
      minwidth: '180px',
    },
    {
      name: 'City',
      selector: (row) => row.city,
      sortable: true,
      wrap: true,
      minwidth: '120px',
    },
    {
      name: 'State',
      selector: (row) => row.state,
      sortable: true,
      wrap: true,
      minwidth: '60px',
    },
    {
      name: 'Zip Code',
      selector: (row) => row.zipCode,
      sortable: true,
      wrap: true,
      minwidth: '120px',
    },
  ];

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Les mois sont indexés à partir de 0
    const year = date.getFullYear();

    // Formate le jour et le mois pour ajouter un 0 devant si nécessaire
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    // Si l'année est 1970 (ou toute autre logique pour détecter une date non valide), retourne une chaîne vide
    if (year === 1970) {
      return '';
    }

    return `${formattedMonth}/${formattedDay}/${year}`;
  };

  const customStyles = {
    rows: {
      style: {
        fontSize: '16px', // Change la taille de la police pour les lignes
      },
    },
    headCells: {
      style: {
        fontSize: '16px', // Change la taille de la police pour les en-têtes
        fontWeight: '700', // Change le poids de la police pour les en-têtes
      },
    },
  };

  console.log('Global state', employees);

  return (
    <>
      <div className='search-box'>
        <label className='search-box-label' htmlFor='search'>
          Search:
        </label>
        <input
          type='text'
          placeholder='Search employees...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button className='search-box-clear-btn' onClick={() => setSearchTerm('')}>
            X
          </button>
        )}
      </div>
      <DataTable
        columns={columns}
        data={filteredEmployees}
        defaultSortField='firstName'
        pagination
        striped
        customStyles={customStyles}
      />
    </>
  );
}
