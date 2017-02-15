const Question = require('./questionModel');
const User = require('./userModel');
const Team = require('./teamModel');
const Message = require('./messageModel');
const connection = require('../pgConnection');

Team.hasMany(User);
User.hasMany(Question);
Question.hasMany(Message);
Question.belongsTo(User);
User.hasMany(Message);
Message.belongsTo(Question);

connection.sync({
    // force: true
});

module.exports = {
    Question, User, Team, Message
}