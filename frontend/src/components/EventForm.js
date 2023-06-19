import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './EventForm.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchEvents } from '../redux/eventsSlice';

function EventForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [timezone, setTimezone] = useState('UTC');
  const [message, setMessage] = useState(''); // New state variable for the success message

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to the backend
    axios.post('http://localhost:3000/events', {
      name,
      description,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      timezone,
    })
    .then((response) => {
      console.log(response);
      setMessage('Event created successfully!');
      dispatch(fetchEvents()); // Fetch the updated list of events
    })
    .catch((error) => {
      console.error(error);
    
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        setMessage(`Error: ${error.response.data}`);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        setMessage('Error: No response from server.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        setMessage(`Error: ${error.message}`);
      }
    });
    
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="label">
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input" />
      </label>
      <label className="label">
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="textarea" />
      </label>
      <label className="label">
        Start Date:
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="datepicker" />
      </label>
      <label className="label">
        End Date:
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className="datepicker" />
      </label>
      <label className="label">
        Timezone:
        <input type="text" value={timezone} onChange={(e) => setTimezone(e.target.value)} className="input" />
      </label>
      <button type="submit" className="button">Create Event</button>
      {message && <p>{message}</p>} {/* Show the success or error message */}

    </form>
  );
}

export default EventForm;
