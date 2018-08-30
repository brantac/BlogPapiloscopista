exports.videos = (req, res) => {
    res.render('videos', {
        page: 'videos',
        slug: ''
    });
}