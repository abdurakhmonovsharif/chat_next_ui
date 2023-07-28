import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'craeteChat',
  initialState: false,
  reducers: {
    setCreateChat: (state, action) => {
      state = action.payload;
      return action.payload;
    },
    clearChat: (state) => {
      state = false
      return false;
    }
  },
});

export const { clearChat, setCreateChat } = userSlice.actions;
export default userSlice.reducer;
