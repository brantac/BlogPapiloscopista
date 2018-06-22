const express = require('express');
const app = express();
const path = require('path');


/* posts object */
let myPosts = [
    {"id": 1, "title": 'Primeiro Post', "tagId": 'primeiro-post', "postPath": '/post/primeiro-post'},
    {"id": 2, "title": 'Segundo Post', "tagId": 'segundo-post', "postPath": '/post/segundo-post'},
    {"id": 3, "title": 'Terceiro Post', "tagId": 'terceiro-post', "postPath": '/post/terceiro-post'}
];

/* functions */
var postExist = (postPath, posts) => {
    var pLen = posts.length;
    var postFound = false;
    var ind = 0;
    while (!postFound && ind < pLen) {
        if (postPath == posts[ind].postPath) {
            postFound = true;
        }
        ind++;
    }
    return postFound;
}

/* middleware */
app.use(express.static('public'));

/* routes */
app.get('/',(req, res, next) => {
    res.sendFile(__dirname + '/routes/index.html');
});
app.get('/postList', (req, res) => {
    res.json(JSON.stringify(myPosts));
})
app.get('/post/terceiro-post', (req, res) => {
    res.sendFile(__dirname + '/routes/post/terceiro-post');
})

// DESCOMENTAR E TRATAR AS REQUISICOES DE POSTS!

/* app.get('/post/*', (req, res) => {
    var pExist = postExist(req.url, myPosts);
    if (pExist) {
        res.sendFile(__dirname + '/routes/' + req.url + '.html');
    } else {
        res.send('<h2>Este post não existe</h2>');
    }
}); */

app.listen(3000, () => console.log('App.js running at http://localhost:3000'));