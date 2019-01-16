const posts_model = require('../models/postsModel');
const Prismic = require('prismic-javascript');
let apiEndpoint = 'http://papiloscopiando.prismic.io/api/v2';

/**
 * Prismic Api object initiator
 */
function initApi(req) {
    return Prismic.getApi(apiEndpoint, {
        req: req
    });
}

/**
 * Retrieve a **list** of the
 * most recent posts.
 */
exports.retrieveList = (req, res) => {
    initApi(req).then(api => {
        return posts_model.queryList(api);
    })
    .then(response => {
        let data = {
            page: 'index',
            slug: '',
            response: response,
            seo: {
                title: 'Blog | ',
                description: 'Fique por dentro das novidades sobre a papiloscopia' +
                ' no Brasil e no mundo. Compartilhamos conhecimento, compartilhamos cidadania.',
                image: '/img/icones/blog_icon_15px.png'
            }
        };
        res.render('main', data);
    })
    .catch(reason => {
        res.status(404).render('404');
    });
};