const router = require("express").Router();
const sdmController = require("../controllers/sdm.controller");
// const verify = require('../utils/verifyToken')
// const { authValidationRules, validate } = require('../utils/validators')

router
  .post("/create", sdmController.createSdm)
  .patch("/:id", sdmController.updateSdm)
  .delete("/:id", sdmController.deleteSdm)
  .get("/", sdmController.getAllSdm)

module.exports = router;
