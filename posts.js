const express = require('express');
const router = express.Router();
const path = require('path');
/**
 * Here I have an object that stores information about all
 * my posts. It can be used to manage them in any way that
 * I want
 */
let myPosts = [
    {"id": 1, "title": 'Primeiro Post', "tagId": 'primeiro-post', "path": '/post/primeiro-post'},
    {"id": 2, "title": 'Segundo Post', "tagId": 'segundo-post', "path": '/post/segundo-post'},
    {"id": 3, "title": 'Terceiro Post', "tagId": 'terceiro-post', "path": '/post/terceiro-post'}
];
/**
 * Here I have functions that can be used to manage my posts,
 * such as retrieving them to the client if asked. 
 */
// var arr = myPosts.map( function (ele) { return '/' + ele.tagId;} ); USE IN THE URL MATCHING
let getLastPost = (postsListName = []) => {
    let path = '';
    if (postsListName.length === 0) {
        var indexLast = postsListName.length - 1;
        path = postsListName[indexLast]['path'];
    }
    return path;
};
let postExist = (post, postsList, key) => {
    var pLen = postsList.length;
    var postFound = false;
    var ind = 0;
    while (!postFound && ind < pLen) {
        if (post == postsList[ind][key]) {
            postFound = true;
        }
        ind++;
    }
    return postFound;
};
/**
 * My posts controllers
 */
router.get('/:slug', (req, res, next) => {
    /**
     * if '!jquery' request, send the index,
     * else send the specific post
     */
    if (!req.xhr) {
        res.sendFile(path.join(__dirname, 'routes/index.html'));
    } else {
        next();
    }
}, (req, res, next) => {
    if (postExist(req.params.slug, myPosts, 'tagId')) {
        res.sendFile(path.join(__dirname , '/routes/post/' + req.params.slug + '.html'));
    } else {
        /**
         * handle this response in the index page
         */
        res.sendStatus(404);
    }
});
module.exports = router;