const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const User = require('../models/userModel')
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK,
        },
        function (accessToken, refreshToken, googleProfile, cb) {
        
                User.findOne({ 'googleId': googleProfile.id }, function(err, user) {
                  if (err) return cb(err);
                  if (user) {
                    return cb(null, user);
                  } else {
                    // we have a new student via OAuth!
                    var newStudent = new User({
                      name: googleProfile.displayName,
                      email: googleProfile.emails[0].value,
                      googleId: googleProfile.id
                    });
                    newStudent.save(function(err) {
                      if (err) return cb(err);
                      return cb(null, newStudent);
                    });
                  }
                });
              }
    ))
passport.serializeUser(function (user, done) {
    done(null, user.id)
})
passport.deserializeUser(function (id, done) {
    User.findById(id)
    .then((user) => {
        console.log(user,id)
        done(null, user)
    })
    .catch((err) => done(err))
})