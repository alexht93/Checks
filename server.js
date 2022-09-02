const { app } = require('./app');
const { db } = require('./utils/dataBase.util');

const startServer = async () => {
  try {
    await db.authenticate();
    await db.sync();

    //Set server to listen
    const PORT = 3000;

    app.listen(PORT, () => {
      console.log('Express app is running');
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
