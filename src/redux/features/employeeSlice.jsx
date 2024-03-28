import { createSlice } from '@reduxjs/toolkit';
import { initialEmployees } from '../../data/dataEmployee';

const initialState = {
  employees: initialEmployees, //Contiendra une liste d'employés
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee(state, action) {
      state.employees.push(action.payload);
    },
  },
});

// Export de l'action générée automatiquement par le slice
export const { addEmployee } = employeeSlice.actions;

// Export du réducteur du slice
export default employeeSlice.reducer;
