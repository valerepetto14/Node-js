const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://54.167.61.17:3000/";

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/data",(req,res)=>{
  res.send("hola")
})

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});


router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "http://54.167.61.17:3000/menu",
    failureRedirect: "/login/failed",
  })
);



module.exports = router