const posts_model = require('../models/postsModel');

// Always display the index page for all requests
exports.index = function (req, res) {
    res.sendFile('../routes/index.html');
    // res.send("NOT IMPLEMENTED: send the index page");
};

// Display json list of all posts
exports.json_all_posts_list = function (req, res) {
    res.send("NAO IMPLEMENTADO: json posts list");
};

// Display a list of the most recent posts
exports.posts_list = function (req, res) {
    res.send("NAO IMPLEMENTADO: posts list");
};

// Display a specifc post
exports.getPost = function (req, res, next) {
    if (req.xhr) {
        if (posts_model.postExist( req.params.slug, "blog_posts", "tagId" )) {
            res.sendFile( __dirname + '/routes/post/' + req.params.slug + '.html' );
        }
    } else {
        next();
    }
    // res.send("NAO IMPLEMENTADO: specifc post");
};