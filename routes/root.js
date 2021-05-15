const express = require("express");
const controller = require("../controller/root_controller");

const router = express.Router();

router.get("/", controller.getRoot);

module.exports = router;
