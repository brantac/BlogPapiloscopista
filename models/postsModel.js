const fs = require('fs');
const butter = require('buttercms')('8b41c028f37bd170bd68bb4c9f4e3578950cfc0a');

/* Array list about all posts */
exports.blog_posts = [
    {"id": 1, "title": 'Primeiro Post', "slug": 'primeiro-post', "path": '/post/primeiro-post'},
    {"id": 2, "title": 'Segundo Post', "slug": 'segundo-post', "path": '/post/segundo-post'},
    {"id": 3, "title": 'Terceiro Post', "slug": 'terceiro-post', "path": '/post/terceiro-post'}
];

/**
 * Try to find the post requested.
 * 'reqSlug' is the name of the post requested.
 * 'list' is the list of posts info.
 * 'key' is the object key used to compare with the slug.
 * NOTE: REWRITE THE FUNCTION USING .MAP(), WHICH IS SIMPLER AND ELEGANT
 */
exports.postExist = (reqSlug = "", list = [], key = "") => {
    var pLen = list.length;
    var postFound = false;
    var ind = 0;
    while (!postFound && ind < pLen) {
        if (reqSlug == list[ind][key]) {
            postFound = true;
        }
        ind++;
    }
    return postFound;
};

// Returns the slug for the last post
exports.lastPostSlug = (list = []) => {
    let l = list.length - 1;
    return list[l][slug];
};

/**
 * Read filenames inside a directory and then
 * read all files content inside that directory
 * using Promises.
 */
// Read the filenames asynchronously
let readdirAsync =  (dir) => {
    return new Promise( (resolve, reject) => {
        fs.readdir(dir, (err, filenames) => {
            if (err) reject(err);
            resolve(filenames); 
        });
    });
};

// Read one file asynchronously
let readFileAsync = (filename, enc) => {
    return new Promise( (resolve, reject) => {
        fs.readFile('./routes/post/' + filename, enc, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};

// Utility function that returns a Promise
let getFile = (filename) => {
    return readFileAsync(filename, 'utf8');
};

// Returns all posts as a Promise
exports.collectAllPosts = () => {
    return readdirAsync('./routes/post/').then( (filenames) => {
        console.log('Filenames: ' + filenames);
        return Promise.all( filenames.map(getFile) )
    })
    .catch( (reason) => reason);
};

// Butter CMS API calls
// fetch all posts in one page
exports.all = (fn) => {
    return butter.post.list({page: 1, page_size: 10})
    .then( fn )
    .catch( reason => console.log(reason) );
};
// fetch one specific post
exports.getpost = (slug, fn) => {
    return butter.post.retrieve(slug)
    .then( fn )
    .catch( reason => console.log(reason) );
};