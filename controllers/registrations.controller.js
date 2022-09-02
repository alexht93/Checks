const { Registrations } = require('../models/resgistration.model');

const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registrations.findAll();

    res.status(200).json({
      status: 'success',
      data: {
        registrations,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getOneRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    //Checking if registration exists
    const registration = await Registrations.findOne({ where: { id } });

    if (!registration) {
      return res.status(404).json({
        status: 'error',
        message: 'Registration not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        registration,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createRegistration = async (req, res) => {
  try {
    const { entranceTime } = req.body;

    const newRegistration = await Registrations.create({
      entranceTime,
    });
    res.status(201).json({
      status: 'sucess',
      data: { newRegistration },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRegistration = async (req, res) => {
  try {
    const { exitTime } = req.body;
    const { id } = req.params;

    //Confirm existance
    const registration = await Registrations.findOne({ where: { id } });

    // If it does not exist
    if (!registration) {
      return res.status(404).json({
        status: 'error',
        message: 'Registration not found',
      });
    }
    registration.update({ exitTime });

    res.status(200).json({
      status: 'success',
      data: { exitTime },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRegistration = async (req, res) => {
  try {
    const { id } = req.params;

    //Confirm existance of registration
    const registration = await Registrations.findOne({ where: { id } });
    //If it does not exist display error message.
    if (!registration) {
      return res.status(404).json({
        status: 'error',
        message: 'Registration not found',
      });
    }
    registration.update({ status: 'Out' });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRegistrations,
  getOneRegistration,
  createRegistration,
  updateRegistration,
  deleteRegistration,
};
