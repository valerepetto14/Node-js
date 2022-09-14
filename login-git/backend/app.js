const express = require("express")
const cookieSession = require("cookie-session");
const passport = require("passport")
const cors = require("cors")
const passportSetup = require("./passport");
const app = express()

app.use(
    cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
  );

const CLIENT_URL="http://localhost:3000/menu"
app.use(cors())
app.use(passport.initialize());
app.use(passport.session());

app.get("/auth/github", passport.authenticate("github", {scope: ["profile"] }));

app.get("/auth/github/callback", passport.authenticate("github",{
    successRedirect: CLIENT_URL,
    failureRedirect: "http://localhost:3000"
}))

app.listen( 5000, ()=>{
    console.log("server is running")
})