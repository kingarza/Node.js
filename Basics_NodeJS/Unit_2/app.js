const express = require('express');

// express app
const app = express();

//register view engine
app.set('view engine', 'ejs');
app.set('view engine', 'myviews');

//listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    // we specify the relative root with the 2nd parameter
    res.sendFile('./views/index.html', { root : __dirname });
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root : __dirname });
})

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

//404 page
// default case, This function is executed if none of the above functions worked
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root : __dirname })
})