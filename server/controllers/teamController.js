const Team = require('../models/teamModel');

function addTeam(req, res) {
  Team.create({
    teamname: req.body.teamname
  });
}

function getTeams(req, res) {
  Team.findAll({
    order: '"teamname" DESC'
  }).then(results => res.send(results));
}


module.exports = {addTeam, getTeams};