const passport = require('passport')

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const User = require('../models/userModel')


// name: String, 
// email:String, 
// avatar: String, 
// googleId: String,

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK,
        },
        function (accessToken, refreshToken, googleProfile, cb) {
            console.log('I AM VERIFY CALLBACK:', accessToken, refreshToken, googleProfile)
        
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
            //             User.findOne({googleId: googleProfile.id})
//             .then((user)=> {
//                 if(user){
//                     if(user.avatar){
//                         return cb(null, user)
//                     }
//                     user.avatar = googleProfile.photos[0].value
//                 console.log("im line 29",user)

//                     user.save().then((user) => cb(null, user))
//                 }
//                 const newUser = new User({
//                     name: googleProfile.displayName,
//                     email: googleProfile.emails[0].value,
//                     avatar: googleProfile.photos[0].value,
//                     googleId: googleProfile.id
//                 })
//                 return newUser.save()
//             })
//             .then((newUser) => cb(null, newUser))
//             .catch((err) => cb(err))
//         }
//     )
// )

passport.serializeUser(function (user, done) {
    console.log(user)
    done(null, user.id)
})

passport.deserializeUser(function (id, done) {
    console.log(id)
    User.findById(id)
    .then((user) => {
        console.log(user,id)
        done(null, user)
    })
    .catch((err) => done(err))
})