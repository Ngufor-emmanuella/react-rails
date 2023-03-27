import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Action Thunk
export const retrieveMessages = createAsyncThunk('get-messages', async () => {
  const res = fetch('http://localhost:5000//api/v1/messages');
  const data = (await res).json();
  return data;
});

// Reducers
const messagesSlice = createSlice({
  name: 'greetings',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(
      retrieveMessages.fulfilled,
      (state, action) => action.payload,
    );
  },
});

export default messagesSlice.reducer;

// // Entry point for the build script in your package.json
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import NavBar from './components/navbar';
// import Messge from './components/message';
// import { useEffect } from 'react';
// import { getGreetings } from './redux/greetings';
// import { useDispatch, useSelector } from 'react-redux';
// import { Provider } from 'react-redux';
// import store from './redux/store';

// function App() {

//     const dispatch = useDispatch();
//     useEffect(() => {
//       dispatch(getGreetings());
//     }, [dispatch]);
//   const greeting = useSelector((state) => state.greeting.greetings[0]);
//   const val = 345
//   //console.log(message)
//   return (
//     <div>
//       <h2>React and Rails As one App</h2>
//       <NavBar />
//       <Routes>
//         <Route
//           path="/greeting"
//           element={<Messge prop={greeting} />}
//         />
//       </Routes>
//     </div>
//   );
// }

// ReactDOM.render(
//   <Router>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </Router>,
//   document.getElementById('root'),
// );
