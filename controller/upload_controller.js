const { response, root_path } = require("../utils/utility");
const fs = require("fs");

module.exports = {
  getUpload: (req, res) => {
    response(res, 200, true, "Get Uploaded Files");
  },
  postUpload: (req, res) => {
    console.log("Files: ", req.file);

    const payload = {
      img: {
        data: fs.readFileSync(`${root_path()}/uploads/${req.file.filename}`),
        contentType: "image/png",
      },
    };

    //TODO: Upload Buffer
    response(res, 200, true, req.file.filename);
  },
};
