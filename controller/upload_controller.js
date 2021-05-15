const { response, root_path } = require("../utils/utility");
const data_layer = require("../data_access/asset_data_access");
const fs = require("fs");

module.exports = {
  getUpload: (req, res) => {
    response(res, 200, true, "Get Uploaded Files");
  },
  postUpload: (req, res) => {
    //console.log("File: ", req.file);

    const payload = {
      img: {
        data: fs
          .readFileSync(`${root_path()}/uploads/${req.file.filename}`)
          .toString("base64"),
        contentType: "image/png",
      },
    };

    fs.unlinkSync(req.file.path);
    data_layer
      .createAsset({
        name: req.file.filename,
        type: req.file.fieldname,
        base64_data: payload.img.data,
      })
      .then((data) => {
        response(res, 200, true, data);
      })
      .catch((err) => {
        response(res, 200, true, err.message);
      });
  },
};
