
var User = require('../models/userModel');
var JwtStrategy = require('passport-jwt').Strategy;
    ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = function(passport){

  let options = {};

  options.jwtFromRequest = ExtractJwt.fromAuthHeader();
  options.secretOrKey = 'my_secret';

  passport.use(new JwtStrategy(options, (jwt_payload, done) => {
    User.getUser({_id: jwt_payload._doc._id}, (err, user) => {
      if(err){
        return done(err, false);
      }
      if(user){
        return done(null, user);
      }else{
        return done(null, false);
      }
    })
  }));
}
