const Sequelize = require('sequelize');
const connection = require('../pgConnection');
const bcrypt = require('bcryptjs');

const User = connection.define('users', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^[a-z0-9\_\-]+$/i
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  privileges: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  hooks: {
    afterValidate: (user) => {
      user.password = bcrypt.hashSync(user.password, 8);
    },
  },
});

module.exports = User;
