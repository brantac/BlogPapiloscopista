// Prismic module
const Prismic = require('prismic-javascript');

exports.getVideos = function (api, page) {
    return api.query(
        Prismic.Predicates.any('document.type', ['video_post']))
    .then((response) => {
        return response.results;
    })
    .catch((err) => {
        return err;
    });
};

/**
 * Unfinished!
 * -> Will be used to return a sitemap for all video pages.
 */
exports.getAllVideos = function (api, page, documents) {
    return api.query(
        Prismic.Predicates.any('document.type', ['video_post']),
        {page, pageSize: 10, fetch: []}
    )
    .then((response) => {
        if (response.next_page !== null) {
            return getAllVideos(api, page + 1, documents.concat(response.results));
        }
        return documents.concat(response.results);
    })
    .catch((err) => {
        return err;
    });
};