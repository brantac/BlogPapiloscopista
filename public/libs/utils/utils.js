/**
 * Utility functions: they're called
 * from outside this file.
 */

let allposts = [];
let post = [];
let pathname = location.pathname;
let position = 0; // the last loaded post
let index;
let lastPostIndex = -1;

// Map posts into an array
let mapPosts = (arr, res) => arr = res.map( ele => ele );
// Append posts inside a container
let appendContent = (container = '', content) => $(container).append(content);
// GET posts using ajax
let req_data = (url = '', fn) => {
    $.ajax( url, {
        async: true,
        success: (res) => fn(res),
        error: (xhr, s, error) => console.log(error)
    });
};
// Test if window is in the end of the page
let isEndOfPage = () => {
    let elem = document.querySelector('html');
    if (elem.clientHeight + elem.scrollTop >= elem.scrollHeight) {
        return true;
    }
    return false;
};


/* Using utility functions */
// Request all posts
$( document ).ready( () => {
    if (pathname == '/') req_data( 'http://' + location.host + '/post/all', mapPosts);
})
.ajaxSuccess( (event, xhr, settings) => {
    if (settings.url == 'http://' + location.host + '/post/all') {
        // console.log("Amount of posts: " + allposts.length);
        // allposts.forEach( (v,i) => appendContent('.postsDoBlog', allposts[i]));
        if ( allposts.length > 0) {
            lastPostIndex = allposts.length - 1;
            index = lastPostIndex;
            position++;
            appendContent('.postsDoBlog', allposts[lastPostIndex]);
        }
    }
});
// Request specific post
$(document).ready( () => {
    if (pathname.length > 1) {
        req_data(pathname, res => post = res);
    }
})
.ajaxSuccess( (e, xhr, settings) => {
    if (settings.url == pathname) appendContent('.postsDoBlog', post);
});

// Load a new post IF there's more and the screen is in the end of the page
$(document).scroll( () => {
    if ( position < allposts.length && isEndOfPage() ) {
        index--;
        appendContent('.postsDoBlog', allposts[index]);
        position++;
    }
});