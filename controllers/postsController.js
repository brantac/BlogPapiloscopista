const posts_model = require('../models/postsModel');
const Prismic = require('prismic-javascript');
const PrismicConfig = require('../public/libs/utils/prismic-config');
const apiEndpoint = 'http://papiloscopiando.prismic.io/api/v2';

/**
 * Prismic API object initiator 
 */
function initApi (req) {
    return Prismic.getApi(apiEndpoint, {req: req});
}

/**
 * Retrieve a single post
 */
exports.retrievePost = (req, res) => {
    let slug = req.params.slug;

    initApi(req).then(api => {
        return posts_model.queryPost(api, slug);
    })
    .then(response => {
        let data = {
            page: 'post',
            slug: slug,
            response: response,
            published: new Date(response.first_publication_date),
            updated: new Date(response.last_publication_date),
            seo: response.data.seo_group[0],
            docs: response.data.body.filter(slice => slice.slice_type == 'documentos')
        };
        res.render('main', data);
    })
    .catch(reason => {
        res.status(404).render('404');
    });
};

/**
 * Generate the sitemap used
 * by search engines
 */
exports.generateSitemap = (req, res) => {
    Prismic.getApi(apiEndpoint, {req}).then((api) => {
        return posts_model.getPages(api, 1, []);
    })
    .then((documents) => {
        let body = '';
        documents.forEach((doc) => {
            body += `https://papiloscopiando.com.br${PrismicConfig.linkResolver(doc)}\r\n`;
        });
        res.set({
            'Content-Type': 'text/plain',
            'max-age': '0'
        });
        res.status(200).send(body);
    })
    .catch((err) => {
        res.status(500).send(`Error: ${err.message}`);
    })
}