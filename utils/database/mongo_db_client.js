const mongoose = require("mongoose");

const databaseConnect = () => {
  return new Promise((resolve, reject) => {
    const connection_string =
      "mongodb+srv://greencdn:42kT2NFhQ9DydWdA@green-store-db.omehk.mongodb.net/sandook-cdn";
    mongoose
      .connect(connection_string, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((response) => {
        console.log("Database Connected 🔋");
      })
      .catch((err) => {
        console.log("Database Connection Failed 🚨");
      });
  });
};

module.exports.databaseConnect = databaseConnect;
