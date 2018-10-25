exports.linkResolver = function (doc, ctx) {
    if (doc.type === 'blog_post') return '/post/' + doc.uid;
    if (doc.type === 'blog_video') return '/videos/' + doc.uid;
    return '/';
};