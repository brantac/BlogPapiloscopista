const Prismic = require('prismic-javascript');

/**
 * Query a single post using the prismic
 * api object and the :slug request.
 */
exports.queryPost = (api, slug = "") => {
    return api.getByUID('blog_post', slug)
    .then(response => {
        return  response; 
    })
    .catch(reason => {
        return reason;
    });
};

/**
 * Query a **list** of posts.
 * 
 * In the future, try to query
 * different types of documents
 * in the same request.
 */
exports.queryList = (api) => {
    return api.query(Prismic.Predicates.any('document.type', [
        'fixed_post',
        'blog_post',
        'video_post',
        'analytics'
    ]))
    .then(response => response)
    .catch(reason => reason);
};

/**
 * Fetch all pages recursevely.
 * 
 * It is used by search engines.
 */
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