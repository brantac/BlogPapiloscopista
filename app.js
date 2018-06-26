const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const posts = require('./posts.js');

/**
 * middleware
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// const options = {maxAge: '10m'}; USE THIS OPTION IN PRODUCTION!
app.use( express.static(path.join(__dirname, 'public')) );

/**
 * routes
 */
app.use('/post', posts);

app.get('/',(req, res) => {
    if (!req.xhr) {
        res.sendFile(path.join(__dirname, 'routes/index.html'));
    }
});

app.listen(3000, () => console.log('App.js running at http://localhost:3000'));