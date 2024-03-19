import { createSlice } from '@reduxjs/toolkit';

// Définis l'état initial de ton slice
const initialState = {
  employees: [], // Cet état initial contiendra une liste d'employés
};

// Utilise createSlice pour créer ton slice
const employeeSlice = createSlice({
  name: 'employees', // Le nom de ton slice
  initialState, // L'état initial que tu as défini
  reducers: {
    // Ajoute un réducteur pour ajouter un employé
    addEmployee: (state, action) => {
      state.employees.push(action.payload); // Ajoute l'employé envoyé à l'action dans la liste des employés
    },
    // Tu peux ajouter d'autres réducteurs ici selon tes besoins
  },
});

// Exporte les actions générées automatiquement par le slice
export const { addEmployee } = employeeSlice.actions;

// Exporte le réducteur du slice
export default employeeSlice.reducer;
