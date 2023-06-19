import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './eventsSlice';

export default configureStore({
  reducer: {
    events: eventsReducer,
  },
});
