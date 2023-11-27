'use client'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import usersSlice from './users'

const rootReducer = combineReducers({
  users: usersSlice
})

export const store = configureStore({
  reducer: rootReducer
})
