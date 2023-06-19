# Event Management App

This is a basic event management application built with Node.js and React. The backend is a REST API that allows you to create and list events, and the frontend allows you to interact with these features in a user-friendly manner.

## Features

- Create an event with a name (up to 32 characters), description, start date, end date, and timezone
- List all created events with their details
- Handle timezones: events are stored in UTC and converted to the appropriate timezone when displayed

## Technologies Used

- Backend: Node.js, Express, moment-timezone, body-parser, Joi
- Frontend: React, Axios, react-datepicker, Redux

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository: `git clone https://github.com/camauger/event-app.git`
2. Navigate to the project directory: `cd event-app`
3. Install the backend dependencies: `cd backend && npm install`
4. Install the frontend dependencies: `cd ../frontend && npm install`

### Running the Application

1. Start the backend server: `cd backend && node server.js`
2. In a new terminal window, start the frontend server: `cd frontend && npm start`
3. Open your browser and navigate to `http://localhost:3000`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
