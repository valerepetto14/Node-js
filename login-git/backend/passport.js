const GITHUB_CLIENT_ID="512002fff08a2a9574c2"
const GITHUB_CLIENT_SECRET="35e763ed5f638348e2e590df788a68f764208cee"
const passport = require("passport")
const GithubStrategy = require("passport-github2").Strategy;

passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));

passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });