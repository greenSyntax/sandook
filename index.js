const express = require("express");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use("/", require("./routes/root"));
app.use("/upload", require("./routes/upload"));

app.listen(PORT, () => {
  console.log(`Sandook is Running at ${PORT} 🟢`);
});

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION, APP SHUTTING NOW!!");
  //TODO:
  process.exit(1);
});
