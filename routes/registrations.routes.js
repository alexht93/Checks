const express = require('express');

const {
  getAllRegistrations,
  getOneRegistration,
  createRegistration,
  updateRegistration,
  deleteRegistration,
} = require('../controllers/registrations.controller');

//Middlewares
const { registrationExists } = require('../middlewares/registration.mw');

const registrationsRouters = express.Router();

//Registrations endpoints
registrationsRouters.get('/', getAllRegistrations);

registrationsRouters.get('/:id', registrationExists, getOneRegistration);

registrationsRouters.post('/', createRegistration);

registrationsRouters.patch('/:id', registrationExists, updateRegistration);

registrationsRouters.delete('/:id', registrationExists, deleteRegistration);

module.exports = { registrationsRouters };
