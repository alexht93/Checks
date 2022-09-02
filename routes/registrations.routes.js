const express = require('express');

const {
  getAllRegistrations,
  getOneRegistration,
  createRegistration,
  updateRegistration,
  deleteRegistration,
} = require('../controllers/registrations.controller');

const registrationsRouters = express.Router();

//Registrations endpoints
registrationsRouters.get('/', getAllRegistrations);

registrationsRouters.get('/:id', getOneRegistration);

registrationsRouters.post('/', createRegistration);

registrationsRouters.patch('/:id', updateRegistration);

registrationsRouters.delete('/:id', deleteRegistration);

module.exports = { registrationsRouters };
