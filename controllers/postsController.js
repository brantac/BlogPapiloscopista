// let posts = require('../models/posts'); UNCOMMENT AFTER CREATING THIS MODEL

/* Always display the index page for all requests */
exports.index = function (req, res) {
    res.send("NOT IMPLEMENTED: send the index page");
};

/* Display json list of all posts */
exports.json_all_posts_list = function (req, res) {
    res.send("NAO IMPLEMENTADO: json posts list");
};

/* Display a list of the most recent posts */
exports.posts_list = function (req, res) {
    res.send("NAO IMPLEMENTADO: posts list");
};

/* Display a specifc post */
exports.post = function (req, res) {
    res.send("NAO IMPLEMENTADO: specifc post");
};