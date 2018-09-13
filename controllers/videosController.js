exports.videos = (req, res) => {
    res.render('videos', {
        page: 'videos',
        slug: 'videos',
        seo: {
            title: 'Videos | ',
            description: 'Fique por dentro das novidades sobre a papiloscopia' +
            ' no Brasil e no mundo. Compartilhamos conhecimento, compartilhamos cidadania.',
            image: '/img/icones/blog_icon_15px.png'
        }
    });
}