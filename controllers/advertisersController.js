const analyticsReportingModel = require('../models/googleAnalyticsModel');

exports.advertisers = (req, res) => {
    res.render("main", {
        page: 'advertisers',
        slug: 'anunciantes',
        seo: {
            title: 'Anunciantes | ',
            description: 'Fique por dentro das novidades sobre a papiloscopia' +
            ' no Brasil e no mundo. Compartilhamos conhecimento, compartilhamos cidadania.',
            image: '/img/icones/blog_icon_15px.png'
        }
    });
};

exports.sendAnalyticsReporting = (req, res) => {
    analyticsReportingModel.main()
    .then(data => res.send(data))
    .catch(err => new Error(err));
    // res.end("Success");
};