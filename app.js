const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const CleanBlog = require('./models/CleanBlog');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  const cleanblogs = await CleanBlog.find({});
  res.render('index', {
    cleanblogs,
  });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add_post');
});
app.post('/cleanblogs', async (req, res) => {
  await CleanBlog.create(req.body);
  res.redirect('/');
});

const port = 3000;

app.listen(port, () => {
  console.log(`sunucu ${port} portuna bağlandı`);
});
