const posts_model = require('../models/postsModel');

// Butter CMS
// Send index page
exports.index = (req, res, next) => {
    posts_model.list( (response) => {
        res.render('index', {
            page: 'index',
            slug: '',
            posts: response.data.data,
            previous_page: response.data.meta.previous_page,
            next_page: response.data.meta.next_page
        });
    });
};

// Prismic CMS
exports.index2 = (req, res) => {
    let promiseHandlers = [];

    // functions
    promiseHandlers[0] = (response) => {
        console.log(response.results[0]);
        let obj = {
            page: 'index',
            slug: '',
            posts: response.results
        };
        res.render('index', obj);
        // res.end('Hello world');
    };
    promiseHandlers[1] = (reason) => {
        res.status(404).render('404');
    };

    // store a closure
    let queryList = posts_model.queryList();
    queryList(req, promiseHandlers);
};

// Send numbered page
exports.page = (req, res, next) => {
    posts_model.list( (response) => {
        res.render('index', {
            page: 'index',
            slug: '',
            posts: response.data.data,
            previous_page: response.data.meta.previous_page,
            next_page: response.data.meta.next_page
        });
    }, req.params.page);
};
