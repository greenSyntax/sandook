const Asset = require("../models/asset_model");

module.exports = {
  getAssets: () => {
    return new Promise((resolve, reject) => {
      Asset.find({}, (err, documents) => {
        if (err) reject(err);
        resolve(documents);
      });
    });
  },

  createAsset: (payload) => {
    return new Promise((resolve, reject) => {
      const asset = new Asset(payload);
      asset.save((err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  updateAsset: (imageId, payload) => {
    return new Promise((resolve, reject) => {});
  },

  deleteAsset: (imageId) => {
    return new Promise((resolve, reject) => {});
  },
};
