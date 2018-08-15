const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Routes
const posts = require('./routes/posts');
const index = require('./routes/index');
const about = require('./routes/about');
const author = require('./routes/author');
const advertisers = require('./routes/advertisers');

// Set the EJS view engine
app.set('view engine', 'ejs');

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use( express.static(path.join(__dirname, 'public')) );

// Using routes
app.use('/', index);
app.use('/post', posts);
app.use('/sobre', about);
app.use('/autor', author);
app.use('/anunciantes', advertisers);

app.listen(process.env.PORT || 3000, () => {
    const port = process.env.PORT || 3000;
    const host = process.env.HOST || 'localhost';
    console.log(`App.js running at http://${host}:${port}`);
});