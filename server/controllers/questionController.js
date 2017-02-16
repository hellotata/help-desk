const Models = require('../models/models');

function getQuestions(req, res) {
  Models.Question.findAll({
    order: '"createdAt" DESC',
    include: [{
        model: Models.User
    }]
  }).then(questions => {
    res.send(questions);
  });
}

function addQuestion(req, res) {
  Models.Question.create({
    userId: req.body.userId,
    question: req.body.question
  })
  .then(() => res.send('Question added'))
  .catch(err => res.send(err));
}

module.exports = { getQuestions, addQuestion };
