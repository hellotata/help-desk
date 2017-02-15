const Sequelize = require('sequelize');
const connection = require('../pgConnection');

const Question = connection.define('questions', {
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // asker: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  answered: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }
});

module.exports = Question;
