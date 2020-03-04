const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Load User Model
const User = require('./db/schemat/userSchema');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        let user = await User.findOne({ username });
        if (!user) {
          // Return null for errors, false for user (no match) and custom message
          return done(null, false, { message: 'Invalid credentials' });
        }
        // Comparing input password with hashed db password
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
          // return null for errors and user for user
          return done(null, user);
        } else {
          return done(null, false, { message: 'Invalid credentials' });
        }
      } catch (error) {
        console.error(err.message);
      }
    })
  );

  // En tiedä miksi tarvitaan? MUTTA VAADITAAN  https://stackoverflow.com/questions/19948816/passport-js-error-failed-to-serialize-user-into-session

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
};
