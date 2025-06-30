import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  user: { email: string } | null;
  isAuthenticated: boolean;
  error: string | null;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: ""
    },
    isAuthenticated: false,
    error: null
  } as AuthState,
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true
      state.error = null
    },
    loginFaliure: (state) => {
      state.isAuthenticated = false
      state.error = "Login Unsuccessful"
    },
    logout: (state) => {
      state.user = null
      state.error = null
      state.isAuthenticated = false
    },
    clearError: (state) => {
      state.error = null
    }
  },
})

export const { loginFaliure, loginSuccess, logout, clearError } = authSlice.actions

export default authSlice.reducer
