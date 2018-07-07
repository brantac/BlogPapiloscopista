const posts_model = require('../models/postsModel');

const fileOptions = {
    root: '.'
}

exports.index = function (req, res, next) {
    res.sendFile(__dirname + '/routes/index.html');
};