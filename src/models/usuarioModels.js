const { DataTypes } = require('sequelize');

const database = require( './../config/SequelizeConfig.js')

const sequelize = new Sequelize('sqlite::memory:');

