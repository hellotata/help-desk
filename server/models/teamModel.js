const Sequelize = require('sequelize');
const connection = require('../pgConnection');

const Team = connection.define('teams', {
  teamname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Team.sync(
  {
    // remove when tables solidified
    // force: true,
  }
);

module.exports = Team;
