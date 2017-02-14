const Sequelize = require('sequelize');
const connection = require('../pgConnection');

const Team = connection.define('messages', {
  teamname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Message.sync(
  // {
  //   // remove when tables solidified
  //   force: true,
  // }
);

module.exports = Message;
