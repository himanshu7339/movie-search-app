import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from './Slices/moviesSlice'

export const store = configureStore({
  reducer: {
    movie : moviesSlice
  },
})