const CleanBlog = require('../models/CleanBlog');
exports.getAllPost = async (req, res) => {
  const cleanblogs = await CleanBlog.find({}).sort('-dateCreated');
  res.render('index', {
    cleanblogs,
  });
};
exports.getPost = async (req, res) => {
  console.log(req.params.id);
  const post = await CleanBlog.findById(req.params.id);
  console.log(post);
  res.render('post', {
    post,
  });
};
exports.createPost = async (req, res) => {
  await CleanBlog.create(req.body);
  res.redirect('/');
};
exports.updatePost = async (req, res) => {
  const post = await CleanBlog.findOne({ _id: req.params.id });
  post.nametext = req.body.nametext;
  post.message = req.body.message;
  post.date = req.body.date;
  post.save();

  res.redirect(`/cleanblogs/${req.params.id}`);
};
exports.deletePost = async (req, res) => {
  await CleanBlog.findByIdAndDelete(req.params.id);
  res.redirect('/');
};
