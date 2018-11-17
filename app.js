const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');
const PrismicDOM = require('prismic-dom');
const prismicConfig = require('./public/libs/utils/prismic-config');

/* Routes */
const posts = require('./routes/posts');
const index = require('./routes/index');
const about = require('./routes/about');
const author = require('./routes/author');
const advertisers = require('./routes/advertisers');
const contact = require('./routes/contact');
const videos = require('./routes/videos');

/* Set ups */
app.set('view engine', 'ejs');
app.set('trust proxy', true);

/* Config */
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// [ ! DISABLED. WE'RE USING WEBPACK GENERATED CSS WITH HASH NUMBERS ! ]
// cache-busting css
// app.use((req, res, next) => {
//     if (path.extname(req.url) === '.css') {
//         let fsplit = path.basename(req.url).split('.');
//         if (fsplit.length > 2) {
//             req.url = path.join('/css/',
//                 fsplit.filter((ele, ind) => ind !== 1).join('.'));
//         }
//     }
//     next();
// });
// set static files cache control headers
app.use(express.static(path.join(__dirname, 'public'), {
    setHeaders: function (res, pat, stat) {
        res.set('Cache-Control', 'public, max-age=1800000');
    }
}));

/**
 * Objects and Methods that can be used
 * inside all HTML pages.
 */
app.use((req, res, next) => {
    res.locals.ctx = {
        endpoint: 'http://papiloscopiando.prismic.io/api/v2',
        linkResolver: prismicConfig.linkResolver
    };
    res.locals.PrismicDOM = PrismicDOM;
    next();
});

// Using routes
app.use('/', index);
app.use('/post', posts);
app.use('/sobre', about);
app.use('/autor', author);
app.use('/anunciantes', advertisers);
app.use('/contato', contact);
app.use('/videos', videos);

app.listen(process.env.PORT || 3000);