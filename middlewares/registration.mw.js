const { Registrations } = require('../models/resgistration.model');

const registrationExists = async (req, res, next) => {
  try {
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
    // req.anyPropName = 'anyValue'
    req.registration = registration;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registrationExists,
};
