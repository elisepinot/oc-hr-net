import './employeeTable.css';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';

export default function EmployeeTable() {
  const employees = useSelector((state) => state.employees.employees);

  const columns = [
    {
      name: 'First Name',
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: (row) => formatDate(row.startDate),
      sortable: true,
    },
    {
      name: 'Department',
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: 'Date of Birth',
      selector: (row) => (row.dateOfBirth ? formatDate(row.dateOfBirth) : ''),
      sortable: true,
    },
    {
      name: 'Street',
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: 'City',
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: 'Zip Code',
      selector: (row) => row.zipCode,
      sortable: true,
    },
  ];

  // const formatDate = (isoString) => {
  //   const date = new Date(isoString);
  //   return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  // };

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
    <DataTable
      columns={columns}
      data={employees}
      defaultSortField='firstName'
      pagination
      striped
      customStyles={customStyles}
    />
  );
}
