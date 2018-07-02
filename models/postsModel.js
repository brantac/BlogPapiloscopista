/* Array list about all posts */
let blog_posts = [
    {"id": 1, "title": 'Primeiro Post', "tagId": 'primeiro-post', "path": '/post/primeiro-post'},
    {"id": 2, "title": 'Segundo Post', "tagId": 'segundo-post', "path": '/post/segundo-post'},
    {"id": 3, "title": 'Terceiro Post', "tagId": 'terceiro-post', "path": '/post/terceiro-post'}
];

/**
 * Try to find the post requested.
 * 'reqSlug' is the name of the post requested.
 * 'list' is the list of posts info.
 * 'key' is the object key used to compare with the slug.
 * NOTE: REWRITE THE FUNCTION USING .MAP(), WHICH IS SIMPLER AND ELEGANT
 */
exports.postExist = function (reqSlug, list = blog_posts, key) {
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