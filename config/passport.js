const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// load up the user model
const userCtrl = require('../server/controllers/userController');


module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser((user, cb) => {
        console.log('serializing user');
        cb(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser((id, cb) => {
        console.log('deserializing user');
        userCtrl.findById(id, (err, user) => {
            if (err) { return cb(err); }
            cb(null, user);
        });
    });


    // LOCAL LOGIN
    passport.use(new LocalStrategy(
        (username, password, cb) => {
            console.log('invoking strategy');
            userCtrl.findByUsername(username, (err, user) => {
                if (err) { return cb(err); }
                if (!user) { return cb(null, false); }
                if (!bcrypt.compareSync(password, user.password)) { return cb(null, false); }
                console.log('username verified');
                return cb(null, user);
            });
    }));
}
