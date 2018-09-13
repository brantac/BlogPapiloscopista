exports.advertisers = (req, res) => {
    res.render("advertisers", {
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