import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Action Thunk
export const retrieveGreetings = createAsyncThunk('get-Greetings', async () => {
  const res = fetch('http://127.0.0.1:3000/api/v1/greeting');
  const data = (await res).json();
  return data;
});

// Reducers
const greetingSlice = createSlice({
  name: 'greetings',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(
      retrieveGreetings.fulfilled,
      (state, action) => action.payload,
    );
  },
});

export default greetingSlice.reducer;

