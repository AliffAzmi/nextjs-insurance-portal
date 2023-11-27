'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: []
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsersStore: (state, action) => {
      state.users = action.payload
    }
  }
})

export const { setUsersStore } = usersSlice.actions
export const getUsersStore = state => state.users.users
export default usersSlice.reducer
