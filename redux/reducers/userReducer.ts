import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null
      window.location.assign('login')
    }
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
