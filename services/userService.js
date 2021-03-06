var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var User = mongoose.model("User");

//passport
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


router.post('/register', function(req, res, next) {
  var user = new User(req.body);
  user.save(function(err){
    if(err) throw err;
    else res.redirect("/activities");
  });
});


router.post('/login',
            passport.authenticate('local', { successRedirect: '/activities',
                                   failureRedirect: '/',
                                   failureFlash: true })
);

module.exports = router;
