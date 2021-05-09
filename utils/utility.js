var path = require("path");

module.exports = {
  response: (res, status, isSuccess, data) => {
    res.status(status).json({ status: isSuccess, data: data });
  },

  root_path: () => {
    return path.dirname(require.main.filename);
  },
};
