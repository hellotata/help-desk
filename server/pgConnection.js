const pg = require('pg');
const Sequelize = require('sequelize');
const config = require('./../config.js');

console.log(process.env.NODE_ENV);


let thisDb = `postgres://localhost/${config.get(process.env.NODE_ENV).database}`;

const connection = new Sequelize(thisDb);
// const backup = new Sequelize(config.get('production').database);
// console.log(config.get('production').database);
// backup.query('SELECT * FROM users').spread((results, metadata) => {
//   console.log(results);
// });



module.exports = connection;
