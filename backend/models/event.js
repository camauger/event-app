const Joi = require('joi');

// Define the schema for an event
const eventSchema = Joi.object({
  name: Joi.string().max(32).required(),
  description: Joi.string().required(),
  startDate: Joi.date().iso().required(),
  endDate: Joi.date().iso().required(),
  timezone: Joi.string().required()
});

// Array to store events
let events = [];

// Function to add a new event
function addEvent(event) {
  const { error } = eventSchema.validate(event);
  if (error) {
    throw new Error(`Invalid event data: ${error.details[0].message}`);
  }

  // Convert dates to UTC and save timezone information
  const startDate = new Date(event.startDate).toISOString();
  const endDate = new Date(event.endDate).toISOString();
  const timezone = event.timezone;

  events.push({ ...event, startDate, endDate, timezone });
}

// Function to get all events
function getEvents() {
  return events;
}

module.exports = { addEvent, getEvents };
