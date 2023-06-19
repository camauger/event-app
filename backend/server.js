const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment-timezone');
const Joi = require('joi');
const { addEvent, getEvents } = require('./models/event');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/events', (req, res) => {
    try {
        addEvent(req.body);
        res.status(201).send();
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

app.get('/events', (req, res) => {
    res.send(getEvents());
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'An unexpected error occurred' });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
