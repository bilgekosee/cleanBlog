const express = require('express');
const mongoose = require('mongoose');
var methodOverride = require('method-override');

const ejs = require('ejs');

const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

app.get('/', postController.getAllPost);
app.get('/cleanblogs/:id', postController.getPost);
app.post('/cleanblogs', postController.createPost);
app.put('/cleanblogs/:id', postController.updatePost);
app.delete('/cleanblogs/:id', postController.deletePost);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/cleanblogs/edit/:id', pageController.getEditPage);

const port = 3000;

app.listen(port, () => {
  console.log(`sunucu ${port} portuna bağlandı`);
});
