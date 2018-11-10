const Prismic = require('prismic-javascript');
const videosModel = require('../models/videosModel');
const apiEndpoint = 'http://papiloscopiando.prismic.io/api/v2';

exports.videos = (req, res) => {
    Prismic.getApi(apiEndpoint, {req}).then((api) => {
        return videosModel.getVideos(api, req.params.page);
    })
    .then((documents) => {

        /** 
         * Object
         */
        let renderData = {
            page: 'videos',
            slug: 'videos',
            seo: {
                title: 'Videos | ',
                description: 'Fique por dentro das novidades sobre a papiloscopia' +
                ' no Brasil e no mundo. Compartilhamos conhecimento, compartilhamos cidadania.',
                image: '/img/icones/blog_icon_15px.png'
            },
            prismicDocuments: documents
        };

        res.status(200).render('main', renderData);
    })
    .catch((err) => {
        res.status(500).send(`Erro: ${err.message}`);
    });
};