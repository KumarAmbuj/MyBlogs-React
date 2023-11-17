const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  heading: String,
  category: String,
  content: String,
  author: String,
  userId: String,
  date: String,
  likes: Number,
  views: Number,
});

module.exports = mongoose.model("blogs", blogSchema);
