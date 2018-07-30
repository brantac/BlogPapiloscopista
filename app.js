const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const posts = require('./routes/posts');
const index = require('./routes/index');

// Set the EJS view engine
app.set('view engine', 'ejs');

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use( express.static(path.join(__dirname, 'public')) );

// Routes
app.use('/', index);
app.use('/post', posts);

app.listen(3000, () => console.log('App.js running at http://localhost:3000'));