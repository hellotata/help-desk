const Sequelize = require('sequelize');
const connection = require('../pgConnection');

const Team = connection.define('teams', {
  teamname: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Team;
