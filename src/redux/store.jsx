import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './features/employeeSlice';
//importer la/les slice(s)
const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export default store;
