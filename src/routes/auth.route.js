const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const validator = require("../middlewares/validator");
const signin = require("../validators/signin.validator");
// const {verify} = require("../middlewares/jwt");

router
  .post("/signin", validator.validateRequest(signin), authController.signIn)
  .post("/signup", authController.signUp)

module.exports = router;
