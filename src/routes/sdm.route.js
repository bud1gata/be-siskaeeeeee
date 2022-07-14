const router = require("express").Router();
const sdmController = require("../controllers/sdm.controller");
// const verify = require('../utils/verifyToken')
// const { authValidationRules, validate } = require('../utils/validators')

router
  .post("/create", sdmController.createSdm)

module.exports = router;
