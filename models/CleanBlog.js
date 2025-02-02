const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/cleanBlog-demo-db');

const cleanBlogSchema = new Schema({
  nametext: String,
  message: String,
  date: Date,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});
const CleanBlog = mongoose.model('cleanBlog', cleanBlogSchema);

module.exports = CleanBlog;
