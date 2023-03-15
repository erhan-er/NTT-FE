import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from './features/slice';
export const store = configureStore({
  reducer: sliceReducer,
})