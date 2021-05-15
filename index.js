require("dotenv").config();
const express = require("express");
const { databaseConnect } = require("./utils/database/mongo_db_client");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

// Setup
databaseConnect(process.env.DB_CONNECTION_STRING);

app.use("/", require("./routes/root"));
app.use("/upload", require("./routes/upload"));

app.listen(PORT, () => {
  console.log(`Sandook is Running at ${PORT} 🟢`);
});

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION, APP SHUTTING NOW!!");
  process.exit(1);
});
