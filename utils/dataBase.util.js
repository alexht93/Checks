const { Sequelize, DataTypes } = require('sequelize');

//Stablishing data base connection
const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'DBDA08aht',
  port: 5432,
  database: 'Checks',
  logging: false,
});

module.exports = { db, DataTypes };
