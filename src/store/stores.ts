import { createSlice } from '@reduxjs/toolkit';

import { STORES } from '../data/dummy-store';
import Store from '../modules/store';

type StoreState = {
  searchStores: Store[];
}

const initialState: StoreState = {
  searchStores: STORES,
}

const storeSlice = createSlice({
  name: 'stores',
  initialState,
  reducers: {
    addStores: (state, action) => {
      switch (action.payload.kind) {
        case 'SEARCH':
          state.searchStores = action.payload.stores;
          break;
      }
    },
  },
});

export const { addStores } = storeSlice.actions;
export default storeSlice.reducer;
