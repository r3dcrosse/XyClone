// const passport = require('passport');
// const FacebookStrategy = require('passport-facebook)';
// const Username = require('./configDB').Username

// passport.use(new FacebookStrategy({
//     clientID: 'FILL_ME_IN',
//     clientSecret: 'FILL_ME_IN'
//     callbackURL: "http://localhost:3000/auth/facebook/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     User.findOrCreate({
//       id: profile.id,
//       name: profile.name.givenName + '' + profile.name.familyName,
//       token: accessToken
//     })
//     .then((user) => {
//       return done(null, user);
//     })
//     .catch((err) => {
//       return done(err, null);
//     });
//   }
// ));

// module.exports = passport;