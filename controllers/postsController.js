const posts_model = require('../models/postsModel');
const Prismic = require('prismic-javascript');
const PrismicConfig = require('../public/libs/utils/prismic-config');

const apiEndpoint = 'http://papiloscopiando.prismic.io/api/v2';

// Prismic CMS
exports.post = (req, res) => {
    let slug = req.params.slug;
    let promiseHandlers = [];

    // functions
    promiseHandlers[0] = (response) => {
        // testa se slice é do tipo documentos
        let isDoc = function (el) {
            return el.slice_type == 'documentos';
        }
        let obj = {
            page: 'post',
            slug: slug,
            response: response,
            published: new Date(response.first_publication_date),
            seo: response.data.seo_group[0],
            docs: response.data.body.filter(isDoc)
        };
        res.render('main', obj);
        // res.end('Hello world');
    };
    promiseHandlers[1] = (reason) => {
        res.status(404).render('404');
    };

    // store a closure
    let queryPost = posts_model.queryPost();
    queryPost(req, slug, promiseHandlers);
};

// Generate the sitemap used by search engines
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