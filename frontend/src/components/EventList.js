import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents } from '../redux/eventsSlice';

function EventList() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <ul>
      {events.map((event) => (
        <li key={event.id}>
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          <p>{event.startDate} to {event.endDate} ({event.timezone})</p>
        </li>
      ))}
    </ul>
  );
}

export default EventList;
