import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/events')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events', error); 
      });
  }, []);

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
