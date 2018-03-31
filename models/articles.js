const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  _ID:{type: Schema.Types.ObjectId, required: true},
  title: String,
  date: { type: Date, default: Date.now },
  URL: String
});

export default articleSchema;