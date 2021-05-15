const { response } = require("../utils/utility");
const constant = require("../utils/constant");

module.exports = {
  getRoot: (req, res) => {
    response(
      res,
      200,
      true,
      `Welcome to ${constant.APP_NAME} v${constant.APP_VERSION}`
    );
  },
};
