exports.linkResolver = function (doc, ctx) {
    if (doc.type === 'blog_post') return '/post/' + doc.uid;
    return '/';
};