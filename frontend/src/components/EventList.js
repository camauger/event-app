import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents } from '../redux/eventsSlice';
import { utcToZonedTime, format } from 'date-fns-tz';
import './EventList.css';

function EventList() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div className='events'>
      <h1 className='events-title'>Events</h1>
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
    </div>
  );
}

export default EventList;
