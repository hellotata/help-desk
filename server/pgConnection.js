const Sequelize = require('sequelize');
const config = require('./../config.js');

let thisDb = config.get(process.env.NODE_ENV).database;
const connection = new Sequelize(thisDb);

module.exports = connection;
