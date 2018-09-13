const posts_model = require('../models/postsModel');

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
        console.log(response.data.seo_group[0]);
        let obj = {
            page: 'post',
            slug: slug,
            response: response,
            published: new Date(response.first_publication_date),
            seo: response.data.seo_group[0],
            docs: response.data.body.filter(isDoc)
        };
        res.render('post', obj);
        // res.end('Hello world');
    };
    promiseHandlers[1] = (reason) => {
        res.status(404).render('404');
    };

    // store a closure
    let queryPost = posts_model.queryPost();
    queryPost(req, slug, promiseHandlers);
};