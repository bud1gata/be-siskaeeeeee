const router = require("express").Router();
const authController = require("../controllers/auth.controller");
// const verify = require('../utils/verifyToken')
// const { authValidationRules, validate } = require('../utils/validators')

router
  .post("/signin", authController.signIn)
  .post("/signup", authController.signUp)

module.exports = router;
