const Models = require('../models/models');

function getQuestions(req, res) {
  Models.Question.findAll({
    order: '"createdAt" DESC',
  }).then(questions => res.send(questions));
}

function addQuestion(req, res) {
  Models.Question.create({
    question: req.body.question,
    asker: req.body.asker,
  })
  .then(() => res.send('Question added'))
  .catch(err => res.send(err));
}

module.exports = { getQuestions, addQuestion };
