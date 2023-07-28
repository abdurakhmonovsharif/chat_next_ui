import { createSlice } from '@reduxjs/toolkit';

const pathSlice = createSlice({
  name: 'path',
  initialState: 'messages',
  reducers: {
    setPath: (state, action) => {
      state = action.payload;
      return action.payload;
    },
    clearPath: (state) => {
      state = 'messages'
      return 'messages'
    }
  },
});

export const { setPath, clearPath } = pathSlice.actions;
export default pathSlice.reducer;
