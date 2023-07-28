import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import userReducer from './reducers/chatReducer';
import pathReducer from './reducers/pathReducer';
import chatReducer from './reducers/chatReducer';
import createChat from './reducers/createChat';
import settingReducer from './reducers/settingReducer';

const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  return next(action);
};

export const store = configureStore({
  reducer: {
    user: userReducer,
    path: pathReducer,
    chatId: chatReducer,
    createChat: createChat,
    settings: settingReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

setupListeners(store.dispatch);