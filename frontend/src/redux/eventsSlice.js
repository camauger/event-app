import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const eventsSlice = createSlice({
  name: 'events',
  initialState: [],
  reducers: {
    setEvents: (state, action) => {
      return action.payload;
    },
  },
});

export const { setEvents } = eventsSlice.actions;

export const fetchEvents = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3000/events');
  dispatch(setEvents(response.data));
};

export default eventsSlice.reducer;
