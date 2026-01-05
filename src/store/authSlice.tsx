import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  DOB: Date | null;
  maritalStatus: string;
  gender: string;
  phoneNumber: string;
  role: string;
  address: string;
  notification: boolean;
  isEmailVerified: boolean;
  isAccountVerified: boolean;
  profileimageurl: string;
  about: any;
};

export type AuthState = {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
};

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
    },
    logOut: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.loading = false;
    },
    setAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setUser, logOut, setAuthLoading } = authSlice.actions;
export default authSlice.reducer;
