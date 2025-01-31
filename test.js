const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/cleanBlog-demo-db');

const cleanBlogSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: Date,
});
const cleanBlog = mongoose.model('cleanBlog', cleanBlogSchema);
