const pg = require('pg');
const Sequelize = require('sequelize');
const config = require('./../config/config.js');

let thisDb = `postgres://localhost/${config.get(process.env.NODE_ENV).database}`;

const connection = new Sequelize(thisDb);

module.exports = connection;
