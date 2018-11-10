const posts_model = require('../models/postsModel');

// Prismic CMS
exports.list_posts = (req, res) => {
    let promiseHandlers = [];

    /**
     * callback functions that will execute when posts are retrieved
     */
    promiseHandlers[0] = (response) => {
        let obj = {
            page: 'index',
            slug: '',
            posts: response.results,
            seo: {
                title: 'Blog | ',
                description: 'Fique por dentro das novidades sobre a papiloscopia' +
                ' no Brasil e no mundo. Compartilhamos conhecimento, compartilhamos cidadania.',
                image: '/img/icones/blog_icon_15px.png'
            }
        };
        res.render('main', obj);
        // res.end('Hello world');
    };
    promiseHandlers[1] = (reason) => {
        res.status(404).render('404');
    };

    // store a closure
    let queryList = posts_model.queryList();
    queryList(req, promiseHandlers);
};