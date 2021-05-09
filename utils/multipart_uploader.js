const multer = require("multer");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const extension = file.mimetype.split("/")[1];
    cb(null, `${file.fieldname}-${Date.now()}.${extension}`);
  },
});

const multerFilter = (req, file, cb) => {
  const extension = file.mimetype.split("/")[1];
  console.log("Extension: ", extension);
  if (extension === "png" || extension == "jpeg" || extension === "jpg") {
    cb(null, true);
  } else {
    cb(new Error("File Type is not supported. Only (png/jpeg/jpg)."), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

module.exports.upload = upload;
