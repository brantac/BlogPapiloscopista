exports.about = (req, res) => {
    res.render("main", {
        page: 'about',
        slug: 'sobre',
        seo: {
            title: 'Sobre o Blog | ',
            description: 'Fique por dentro das novidades sobre a papiloscopia' +
            ' no Brasil e no mundo. Compartilhamos conhecimento, compartilhamos cidadania.',
            image: '/img/icones/blog_icon_15px.png'
        }
    });
};