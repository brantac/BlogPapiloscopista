exports.about = (req, res) => {
    res.render("about", {
        page: 'about',
        slug: ''
    });
};