import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filters/slice';
import { contactsReducer } from './contactsSlice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
    auth: authReducer,
  },
});
