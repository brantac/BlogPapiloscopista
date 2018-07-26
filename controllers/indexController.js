const posts_model = require('../models/postsModel');

// Butter CMS
// Send index page
exports.index = (req, res, next) => {
    posts_model.list( (response) => {
        res.render('index', {
            posts: response.data.data,
            previous_page: response.data.meta.previous_page,
            next_page: response.data.meta.next_page
        });
    });
};

// Send numbered page
exports.page = (req, res, next) => {
    posts_model.list( (response) => {
        res.render('index', {
            posts: response.data.data,
            previous_page: response.data.meta.previous_page,
            next_page: response.data.meta.next_page
        });
    }, req.params.page);
};