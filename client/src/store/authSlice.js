import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../config/api';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        return data.body.token;
      } else {
        return thunkAPI.rejectWithValue(data.message || 'Login failed');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: sessionStorage.getItem('token') || localStorage.getItem('token'),
    firstName: '',
    lastName: '',
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.firstName = '';
      state.lastName = '';
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
    },
    setProfile: (state, action) => {
      state.firstName = action.payload.firstName || '';
      state.lastName = action.payload.lastName || '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setProfile } = authSlice.actions;
export default authSlice.reducer;
