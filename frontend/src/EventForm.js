import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function EventForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [timezone, setTimezone] = useState('UTC');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send a POST request to the backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Start Date:
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      </label>
      <label>
        End Date:
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </label>
      <label>
        Timezone:
        <input type="text" value={timezone} onChange={(e) => setTimezone(e.target.value)} />
      </label>
      <button type="submit">Create Event</button>
    </form>
  );
}

export default EventForm;
