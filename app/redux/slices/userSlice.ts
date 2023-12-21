import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: any; // Replace with your user type
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setLoading, setError } = userSlice.actions;
export const selectUser = (state: { user: UserState }) => state.user.user;
export const selectLoading = (state: { user: UserState }) => state.user.isLoading;
export const selectError = (state: { user: UserState }) => state.user.error;

export default userSlice.reducer;
