import { createSlice } from '@reduxjs/toolkit';

const pathSlice = createSlice({
  name: 'settings',
  initialState: null,
  reducers: {
    setSettings: (state, action) => {
      state = action.payload;
      return action.payload;
    },
    clearSettingstate: (state) => {
      state = null
      return null;
    }
  },
});

export const { setSettings, clearSettingstate } = pathSlice.actions;
export default pathSlice.reducer;
