const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const postsRouter = require('./posts.js');

/**
 * middleware
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * routes
 */
app.use('/post', postsRouter);

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'routes/index.html'));
});

app.listen(3000, () => console.log('App.js running at http://localhost:3000'));