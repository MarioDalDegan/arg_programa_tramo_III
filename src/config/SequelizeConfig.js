const { Sequelize } = require('sequelize');
const DB_NAME = process.env.DB_NAME
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST

const sequelize = new Sequelize('ap_mario', DB_NAME, DB_PASS, {
    host: DB_HOST, // 'localhost',
    dialect: 'mysql'
  });

const database = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    }

module.exports = {database, sequelize};