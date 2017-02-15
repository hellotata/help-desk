const Models = require('../models/models');

function getMessages(req, res) {
  Models.Message.findAll({
    order: '"createdAt" ASC',
  }).then(messages => {
    // clean this later
    console.log('message', messages);
    res.send(messages);
  })
}

function addMessage(req, res) {
  console.log('the req', req);
  Models.Message.create({
    questionId: req.body.questionId,
    userId: req.body.userId,
    username: req.body.username,
    message: req.body.message,
  })
  .then(() => res.send('Message added'))
  .catch(err => res.send(err));
}

module.exports = { getMessages, addMessage };
