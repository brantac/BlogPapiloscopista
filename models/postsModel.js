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

// Fetch all pages recursively
exports.getPages = function (api, page, documents) {
    return api.query(
        Prismic.Predicates.any('document.type', ['blog_post']),
        {page, pageSize: 100, fetch: []}
    ).then((response) => {
        if (response.next_page !== null) {
            return getPages(api, page + 1, documents.concat(response.results));
        }
        return documents.concat(response.results);
    })
    .catch((err) => {
        return err;
    });
};