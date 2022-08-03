import { configureStore } from '@reduxjs/toolkit';

import storesReducer from './stores';
import usersReducer from './users';

export const store = configureStore({
  reducer: {
    stores: storesReducer,
    users: usersReducer,
  },
});
