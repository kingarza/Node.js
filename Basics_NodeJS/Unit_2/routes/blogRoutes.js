
const express = require('express');
const Blog = require('../models/blog');

const router = express.Router();

router.get('/blogs', (req, res) => {
    Blog.find() //asincrono
    .then((result) => {
        res.render('index', { title : 'All Blogs', blogs : result })
    })
    .catch((err) => {
        console.log(err);
    })
}); 
  
router.post('/blogs', (req, res) => {
    //to avoid undefined, we use middleware: router.use(express.urlencoded({ extended : true }));
    const blog = new Blog(req.body);
    blog.save()
    .then((result) => {
        res.redirect('/blogs');
    })
    .catch((err) => {
        console.log(err);
    })
})

// new blog
router.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});
  

// get by ID
router.get('/blogs/:id', (req, res) => {
    //to avoid undefined, we use middleware: router.use(express.urlencoded({ extended : true }));
    const id = req.params.id;
    Blog.findById(id)
    .then((result) => {
        res.render('details', { blog : result, title : 'Blog Details' });
    })
    .catch((err) => {
        console.log(err);
    })
})

//delete
router.delete('/blogs/:id', (req, res) => {
    //to avoid undefined, we use middleware: app.use(express.urlencoded({ extended : true }));
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({ redirect : '/blogs'});
    })
    .catch((err) => {
        console.log(err);
    })
  })
  
module.exports = router;