const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
const conexion = require('./db/conexion')

const GITHUB_CLIENT_ID="512002fff08a2a9574c2"
const GITHUB_CLIENT_SECRET="35e763ed5f638348e2e590df788a68f764208cee"

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      conexion.query('SELECT * FROM usuarios WHERE ?',{name: profile.displayName}, (error,result) => {
        if (error){
          throw error
        }
        if (result.length === 0) {
          conexion.query('INSERT INTO usuarios SET ?',{id: profile.id, name: profile.displayName}, (error, result) => {
            if (error){
              throw error
            }
            console.log(result)
          })
        }
      })
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
