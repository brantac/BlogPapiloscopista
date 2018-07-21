const posts_model = require('../models/postsModel');

const fileOptions = {
    root: '.'
}

// Send the index.html
exports.index = function (req, res, next) {
    res.sendFile(__dirname + '/routes/index.html');
};

// Send the index view (ESJ)
exports.indexRender = (req, res, next) => {
    /* posts_model.collectAllPosts()
    .then( posts => {
        console.log(typeof posts[0]);
        res.render('index', {'posts': posts});
    })
    .catch( reason => console.log(reason) ); */
    let posts = posts_model.getAll( (response) => {
        res.render('index', {posts: response.data.data});
    });
};