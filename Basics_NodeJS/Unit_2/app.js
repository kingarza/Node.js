const express = require('express');
const morgan = require('morgan'); //for middleware
const mongoose = require('mongoose'); //data base
const Blog = require('./models/blog')

// express app
const app = express();

// connect to MongoDB
const dbURI = 'mongodb+srv://luisGarza:holamundo@nodetuts.i5aug.mongodb.net/note-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser : true, useUnifiedTopology : true })
//listen for requests
  .then((result) => app.listen(4001))
  .catch((err) => console.log(err))

//register view engine
//app.set('views', './views/');
app.set('view engine', 'ejs');

/*
app.use((req, res) => {
  console.log('New request made: ');
  console.log('host', req.hostname);
  console.log('path', req.path);
  console.log('method', req.method);
  next();
})

app.use((req, res) => {
  console.log('In the next middleware');
})
*/

// middleware and static files
app.use(express.static('public')); //any file inside 'public' will be public xD
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title : 'new blog 2',
    snippet : 'about my new blog 2',
    body : 'more about my new blog 2'
  });

  blog.save() //asincrono
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    })
})

app.get('/all-blogs', (req, res) => {
  Blog.find() //asincrono
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    })
})

app.get('/single-blog', (req, res) => {
  Blog.findById('') //asincrono
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    })
})


app.get('/', (req, res) => {
    const blogs = [
      {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs : blogs });
});

app.get('/about', (req, res) => {
res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
res.render('create', { title: 'Create a new blog' });
});

//404 page
// default case, This function is executed if none of the above functions worked
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
})