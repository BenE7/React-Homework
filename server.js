const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongo = require("mongodb");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname, "client/build"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact", {
  useMongoClient: true
});



app.listen(PORT, function() {
  console.log("Server now on port ${PORT}!");
});
