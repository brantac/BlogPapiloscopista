exports.linkResolver = function (doc, ctx) {
    if (doc.type === 'blog_post') return '/blog_post/' + doc.uid;
    return '/';
};