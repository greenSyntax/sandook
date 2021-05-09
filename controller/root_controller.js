const { response } = require("../utils/utility");
const { APP_NAME, APP_VERSION } = require("../utils/constant");

module.exports = {
  getRoot: (req, res) => {
    response(res, 200, true, "Welcome to ${APP_NAME} v${APP_VERSION}");
  },
};
