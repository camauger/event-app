import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './EventForm.css';
import axios from 'axios';

function EventForm() {
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
    })
    .catch((error) => {
      console.error(error);
      /// Show an error message
      setMessage('An error occurred while creating the event.');
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
