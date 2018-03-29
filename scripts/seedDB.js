const mongoose = require("mongoose");

const Schema = mongoose.Schema;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);


const dataSchema = new Schema({
  title: String,
  date: { type: Date, default: Date.now },
  URL: String
});
