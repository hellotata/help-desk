const Models = require('../models/models');
const bcrypt = require('bcryptjs');
// const session = require('client-sessions');

function getUsers(req, res) {
  Models.User.findAll({
    order: '"username" DESC',
  }).then(questions => res.send(questions));
}

function addUser(req, res) {
  // console.log('in add user');
  
  //need error for if user already exists
  if(req.body.username && req.body.password) {
    Models.User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.cookie('user', req.body.username) //need to make this more secure
    res.json({status: 'success', username: req.body.username}); //need to add sessions
  }
}
    

function verifyUser(req, res) {
  console.log('in verify')
  Models.User.findOne({ where: {username: req.body.username}}).then((result) => {
    console.log('result is ', result)
    if(result !== null && bcrypt.compareSync(req.body.password, result.password)) {
        // req.session.user = req.body.username;
        res.cookie('user', req.body.username) //add sessions
        res.json({status: 'success', userId: result.dataValues.id, username: req.body.username});
    } else {
      // take out, send error status, print message in front end
      res.redirect('/');
    };
  });
}

module.exports = {addUser, verifyUser, getUsers};
