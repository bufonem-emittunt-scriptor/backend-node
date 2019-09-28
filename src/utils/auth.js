const passport = require("koa-passport");
const User = require("../models/user.model");

/**
 * Serialize user
 *
 * @param object        User info
 */
passport.serializeUser((user, done) => {
  done(null, user.id);
});

/**
 * Deserialize user from session
 *
 * @param integer        User id
 * @returns
 */
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

/**
 * Localstrategy of Passport.js
 *
 * @param string        Username
 * @param string        password
 * @returns
 */
const LocalStrategy = require("passport-local").Strategy;
passport.use(
  new LocalStrategy(async (username, password, done) => {
    const user = await User.findOne(username);
    if (user) {
      // bcrypt.compare(password, user.password, (error, response) => {
      //   if (response) {
      //     done(null, user);
      //   } else {
      //     done(null, false);
      //   }
      // });
    } else {
      done(null, false);
    }
  })
);

/**
 * google strategy of Passport.js
 *
 * @param
 * @returns
 */
const GoogleStrategy = require("passport-google-auth").Strategy;
passport.use(
  new GoogleStrategy(
    {
      clientId: "your-google-oauth-client-id",
      clientSecret: "your-google-oauth-client-secret",
      callbackURL:
        "http://localhost:" +
        (process.env.PORT || 3000) +
        "/users/auth/google/callback"
    },
    async (token, tokenSecret, profile, done) => {
      // Retrieve user from database, if exists
      const user = await User.findOne({ profileId: profile.id });
      if (user) {
        done(null, user);
      } else {
        // If user not exist, create it
        const newUser = {
          name: profile.displayName,
          profileId: profile.id,
          email: profile.emails[0].value,
          role: "user",
          username: profile.emails[0].value.split("@")[0],
          provider: "google",
          google: profile._json
        };
        const createdUser = await User.create(newUser);
        if (createdUser) {
          done(null, createdUser);
        } else {
          done(null, false);
        }
      }
    }
  )
);

/**
 * Facebook strategy of Passport.js
 *
 * @param
 * @returns
 */
const FacebookStrategy = require("passport-facebook").Strategy;
passport.use(
  new FacebookStrategy(
    {
      clientID: "facebook-app-id",
      clientSecret: "facebook-app-secret",
      callbackURL:
        "http://localhost:" +
        (process.env.PORT || 3000) +
        "/users/auth/facebook/callback",
      profileFields: ["id", "displayName", "name", "photos", "email"]
    },
    async (token, tokenSecret, profile, done) => {
      // Retrieve user from database, if exists
      const user = await User.findOne(profile.emails[0].value);
      if (user) {
        done(null, user);
      } else {
        // If user not exist, create it
        const newUser = {
          name: profile.displayName,
          email: profile.emails ? profile.emails[0].value : "",
          // email: profile.emails[0].value,
          role: "user",
          provider: "facebook",
          facebook: profile._json
        };
        const createdUser = await User.create(newUser);
        if (createdUser) {
          done(null, createdUser);
        } else {
          done(null, false);
        }
      }
    }
  )
);

/**
 * Twitter strategy of Passport.js
 *
 * @param
 * @returns
 */
const TwitterStrategy = require("passport-twitter").Strategy;
passport.use(
  new TwitterStrategy(
    {
      consumerKey: "twitter-client-id",
      consumerSecret: "twitter-client-secret",
      callbackURL:
        "http://localhost:" +
        (process.env.PORT || 3000) +
        "/users/auth/twitter/callback",
      includeEmail: true
    },
    async (token, tokenSecret, profile, done) => {
      // Retrieve user from database, if exists
      const user = await User.findOne(profile.emails[0].value);
      if (user) {
        done(null, user);
      } else {
        // If user not exist, create it
        const newUser = {
          firstName: profile.username,
          lastName: profile.username,
          password: "password-is-from-twitter",
          email: profile.emails[0].value
        };
        const createdUser = await User.create(newUser);
        if (createdUser) {
          done(null, createdUser);
        } else {
          done(null, false);
        }
      }
      console.log(profile);
    }
  )
);

/**
 * LinkedIn strategy of Passport.js
 *
 * @param
 * @returns
 */
const LinkedInStrategy = require("passport-linkedin").Strategy;
passport.use(
  new LinkedInStrategy(
    {
      consumerKey: "linkedin-api-key",
      consumerSecret: "linkedin-secret-key",
      callbackURL:
        "http://localhost:" +
        (process.env.PORT || 3000) +
        "/api/users/auth/linkedin/callback"
    },
    async (token, tokenSecret, profile, done) => {
      // Retrieve user from database, if exists
      const user = await User.findOne(profile.emails[0].value);
      if (user) {
        done(null, user);
      } else {
        // If user not exist, create it
        const newUser = {
          firstName: profile.username,
          lastName: profile.username,
          password: "password-is-from-linkedin",
          email: profile.emails[0].value
        };
        const createdUser = await User.create(newUser);
        if (createdUser) {
          done(null, createdUser);
        } else {
          done(null, false);
        }
      }
    }
  )
);
