// Prismic module
const Prismic = require('prismic-javascript');

// Api endpoint
const apiEndpoint = 'http://papiloscopiando.prismic.io/api/v2';

// Prismic initiator function
let initApi = (req) => {
    return Prismic.getApi(apiEndpoint, {
        req: req
    });
}

// Return one post
exports.queryPost = () => {
    return function (req, slug, promiseHandlers) {
        return initApi(req).then( (api) => {
            api.getByUID('blog_post', slug)
            .then(promiseHandlers[0])
            .catch(promiseHandlers[1]);
        });
    };
};

// Return a list of posts
exports.queryList =  () => {
    return function (req, promiseHandlers) {
        return initApi(req).then( (api) => {
            api.query(Prismic.Predicates.at('document.type', 'blog_post'))
            .then(promiseHandlers[0])
            .catch(promiseHandlers[1]);
        });
    };
};