const express = require("express");
const controller = require("../controller/upload_controller");
const { upload } = require("../utils/multipart_uploader");

const router = express.Router();

router.get("/", controller.getUpload);
router.post("/", upload.single("image"), controller.postUpload);

module.exports = router;
