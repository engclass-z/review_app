import { createSlice } from '@reduxjs/toolkit';

import { USERS } from '../data/dummy-user';
import User from '../modules/user';

type UserState = {
  me: User;
}

const initialState: UserState = {
  me: USERS[0],
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      switch (action.payload.kind) {
        case 'ME':
          state.me = action.payload.user;
          break;
      }
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
