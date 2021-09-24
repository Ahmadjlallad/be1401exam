const mongoose = require("mongoose");
const mySchema = new mongoose.Schema({
  img: String,
  name: String,
  level: String,
  email: String,
});
module.exports = mongoose.model("mySchema", mySchema);
