const express = require('express');

//Routers
const { registrationsRouters } = require('./routes/registrations.routes');

//Init our Express app
const app = express();

//Enable Express app to receive JSON data
app.use(express.json());

//Registration endpoint
app.use('/api/v1/registrations', registrationsRouters);

//Catch non-existing endpoints
app.all('*', (req, res) => {
  res.status(400).json({
    status: 'error',
    message: `${req.method} ${req.url} does not exist`,
  });
});

module.exports = { app };
