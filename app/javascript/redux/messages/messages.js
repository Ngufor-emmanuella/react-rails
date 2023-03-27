import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Action Thunk
export const retrieveGreetings = createAsyncThunk('get-Greetings', async () => {
  const res = fetch('http://127.0.0.1:3000/api/v1/greetings');
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

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const getGreetings = createAsyncThunk(
//   'greetingSlice/getGreetings', async () => {
//     const response = await fetch('http://127.0.0.1:3000/api/v1/greeting')
//       .then((greeting) => greeting.json());
//       return response;
//   },
// );

// const greetingSlice = createSlice({
//   name: 'greeting',
//   initialState: {
//    greetings: [],
//     loading: true,
//     status: '',
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(getGreetings.fulfilled, (state, action) => {
//       const newState = state;
//       newState.greetings.push(action.payload);
//       return newState;
//     });
//   },
// });

// export default greetingSlice;
