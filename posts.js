/**
 * Here I have an object that stores information about all
 * my posts. It can be used to manage them in any way that
 * I want
 */
let myPosts = [
    {"id": 1, "title": 'Primeiro Post', "tagId": 'primeiro-post', "postPath": '/post/primeiro-post'},
    {"id": 2, "title": 'Segundo Post', "tagId": 'segundo-post', "postPath": '/post/segundo-post'},
    {"id": 3, "title": 'Terceiro Post', "tagId": 'terceiro-post', "postPath": '/post/terceiro-post'}
];
/**
 * Here I have functions that can be used to manage my posts,
 * such as retrieving them to the client if asked. 
 */
module.exports = {
    getList: () => {
        return myPosts;
    },
    postExist: (postPath, posts) => {
        var pLen = posts.length;
        var postFound = false;
        var ind = 0;
        while (!postFound && ind < pLen) {
            if (postPath == posts[ind].postPath) {
                postFound = true;
            }
            ind++;
        }
        return postFound;
    }
}