exports.author =  (req, res) => {
    res.render("author", {
        page: 'author',
        slug: 'autor',
        seo: {
            title: 'Autor | ',
            description: 'Fique por dentro das novidades sobre a papiloscopia' +
            ' no Brasil e no mundo. Compartilhamos conhecimento, compartilhamos cidadania.',
            image: '/img/icones/blog_icon_15px.png'
        }
    });
};