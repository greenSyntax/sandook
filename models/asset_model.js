const mongoose = require("mongoose");

const AssetSchema = new mongoose.Schema({
  name: String,
  type: String,
  base64_data: String,
  timestamp: {
    type: Date,
    default: new Date(),
  },
});

const Asset = mongoose.model("Asset", AssetSchema);
module.exports = Asset;
