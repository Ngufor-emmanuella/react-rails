import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import greetingSlice from './messages/messages';

const store = configureStore({
  reducer: {
    greetings: greetingSlice
  }
}, applyMiddleware(thunk));

export default store;
