import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoginIn: false },
  reducers: {
    login(state) {
      state.isLoginIn = true;
    },
    logout(state) {
      state.isLoginIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer,
});
