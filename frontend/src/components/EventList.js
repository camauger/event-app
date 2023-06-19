import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents } from '../redux/eventsSlice';
import { utcToZonedTime, format } from 'date-fns-tz';

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
          <p>
            {format(utcToZonedTime(event.startDate, event.timezone), 'Pp')} to {format(utcToZonedTime(event.endDate, event.timezone), 'Pp')} ({event.timezone})
          </p>
        </li>
      ))}
    </ul>
  );
}

export default EventList;
