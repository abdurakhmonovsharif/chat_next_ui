import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'chatId',
  initialState: { chatId: null },
  reducers: {
    setChatId: (state, action) => {
      state.chatId = action.payload;
    },
    clearChatId: (state) => {
      state.chatId = null
    }
  },
});

export const { setChatId, clearChatId } = userSlice.actions;
export default userSlice.reducer;
