const { addEvent, getEvents } = require('./event');

const request = require('supertest');
const app = require('./server');

describe('POST /events', () => {
  it('creates a new event', async () => {
    const response = await request(app)
      .post('/events')
      .send({
        name: 'Test Event',
        description: 'This is a test event',
        startDate: '2023-06-20T14:30:00Z',
        endDate: '2023-06-20T18:30:00Z',
        timezone: 'America/New_York',
      });

    expect(response.statusCode).toBe(201);
  });
});


describe('addEvent', () => {
  test('adds a valid event to the events array', () => {
    const event = {
      name: 'Birthday Party',
      startDate: '2022-01-01T12:00:00',
      endDate: '2022-01-01T16:00:00',
      timezone: 'America/New_York',
      location: '123 Main St',
      description: 'Come celebrate my birthday!'
    };

    addEvent(event);

    expect(getEvents()).toContainEqual(event);
  });

  test('throws an error for invalid event data', () => {
    const event = {
      name: 'Invalid Event',
      startDate: 'invalid date',
      endDate: 'invalid date',
      timezone: 'invalid timezone',
      location: 'invalid location',
      description: 'invalid description'
    };

    expect(() => addEvent(event)).toThrow();
  });
});

describe('getEvents', () => {
  test('returns an array of events', () => {
    const events = getEvents();

    expect(Array.isArray(events)).toBe(true);
  });
});