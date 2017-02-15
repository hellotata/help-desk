
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const request = require('request')
const qs = require('querystring');

const api = require('./../config.js');
const github = api.github;
const userCtrl = require('./controllers/userController.js');
const questionCtrl = require('./controllers/questionController.js');
const messageCtrl = require('./controllers/messageController.js');
const teamCtrl = require('./controllers/teamController.js');
const bcrypt = require('bcryptjs');

const app = express();

if (process.env.NODE_ENV === 'development') {
  console.log('DEVELOPMENT MODE');
  console.log('WILL HOT RELOAD CHANGES');
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    // noInfo: true,
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());

app.get('/users', userCtrl.getUsers);
app.get('/questions', questionCtrl.getQuestions);
app.get('/messages', messageCtrl.getMessages);

app.post('/users', userCtrl.addUser);
app.post('/questions', questionCtrl.addQuestion);
app.post('/messages', messageCtrl.addMessage);

app.post('/signup', userCtrl.addUser);
// app.post('/login', userCtrl.verifyUser);

passport.use(new LocalStrategy(
    (username, password, cb) => {
        console.log('invoking strategy');
        userCtrl.findByUsername(username, (err, user) => {
            if (err) { return cb(err); }
            if (!user) { return cb(null, false); }
            if (!bcrypt.compareSync(password, user.password)) { return cb(null, false); }
            console.log('user verified');
            return cb(null, user);
        });
}));

passport.serializeUser((user, cb) => {
    cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
    userCtrl.findById(id, (err, user) => {
        if (err) { return cb(err); }
        cb(null, user);
    });
});

app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    (req, res) => {
        console.log('check response send');
        res.status(200).json({userId: req.user.dataValues.id});
    });
// app.get('/auth/github', (req, res) => {  //first step in button request
//     console.log('step 0');
//     var url = 'https://github.com/login/oauth/authorize?' + 
//     'scope=user&' +
//     'redirect_uri=http://localhost:3000/auth/github/callback&' +
//     'client_id=' + github.apiId;
//     res.redirect(url);
// })

// app.get('/auth/github/callback', (req, res) => {
//     console.log('step 1');
//     var tokenQuery = {
//         client_id: github.apiId,
//         client_secret: github.apiSecret,
//         code: req.query.code,
//         accept: 'application/json'
//     }
//     var url = 'https://github.com/login/oauth/access_token?' + qs.stringify(tokenQuery);
//     var options = {
//         url: url,
//         headers: {
//             'user-agent': 'deep'
//         },
//         json: true
//     };
//     request(options, (err, resp, body) => {
//         console.log('step 2');
//         if (err) return res.send(500, err); 
//         console.log(body); 
//         res.cookie('token' , body.access_token); 
//         var options = {
//             url: 'https://api.github.com/user', 
//             headers: {
//                 'user-agent': 'deep', 
//                 'Accept': 'application/json', 
//                 'Authorization': 'token ' + body.access_token
//             },
//             json: true
//         };
//         request(options, (err, resp, body) => {
//             console.log('step 3');
//             //res.send(body);
//             res.redirect('/');
//         });
//     })
// })
// app.get('/github', (req, res) => {
//     console.log('step 4');
//     var token = req.cookies.token;
//     var options = {
//         url: 'https://api.github.com/user', 
//         headers: {
//             'user-agent': 'deep', 
//             'Accept': 'application/json', 
//             'Authorization': 'token ' + token
//         },
//         json: true
//     }
//     request(options, (err, resp, body) => {
//         console.log('step 5');
//         res.send(body);
//     })
// })



app.listen(3000);

module.exports = app;
