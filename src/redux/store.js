import { configureStore } from '@reduxjs/toolkit'
import userReducer from './auth/userSlice.js'
import chatReducer from './userChat/useChat.js'

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,

  },
})