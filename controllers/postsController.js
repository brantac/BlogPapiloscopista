const posts_model = require('../models/postsModel');

// Send file options
const sfOptions = {
    root: "."
};

// Always send the index page
exports.index = function (req, res, next) {
    if ( !req.xhr ) {
        res.sendFile('./routes/index.html', sfOptions);
    } else {
        res.end("<h3>Esta página não existe</h3>");
    }
};

// Display json list of all posts
exports.json_all_posts_list = function (req, res) {
    res.send("NAO IMPLEMENTADO: json posts list");
};

// Display a specifc post
exports.getPostBySlug = function (req, res, next) {
    if (!req.xhr) {
        next();
    } else {
        if (posts_model.postExist( req.params.slug, posts_model.blog_posts, "slug" )) {
            res.sendFile( './routes/post/' + req.params.slug + '.html', sfOptions );
        } else {
            res.end("<h3>Este post não existe</h3>");
        }
    }
};

// Send the last post
exports.getLastPost = function (req, res, next) {
    let postSlug = posts_model.lastPostSlug(posts_model.blog_posts);
    res.sendFile('./routes/post/' + postSlug + '.html', fileOptions);
};

// Send all posts stored in a directory
exports.getAllPostsPromise = function (req, res, next) {
    console.log("Posts controller: before get the promise.");
    posts_model.collectAllPosts().then( (posts) => {
        console.log("Posts controller: sending the promises.");
        posts = posts.map( post => post.toString());
        res.send(posts);
    })
    .catch( (err) => console.log(err));
};

// Prismic CMS
exports.sendPost2 = (req, res) => {
    let slug = req.params.slug;
    let promiseHandlers = [];

    // functions
    promiseHandlers[0] = (response) => {
        console.log(response.data.author[0]);
        let obj = {
            page: 'post',
            slug: slug,
            response: response,
            published: new Date(response.data.publishing_date)
        };
        res.render('post', obj);
    };
    promiseHandlers[1] = (reason) => {
        res.status(404).render('404');
    };

    // store a closure
    let queryPost = posts_model.queryPost();
    queryPost(req, slug, promiseHandlers);
};
