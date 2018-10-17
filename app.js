const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');
const PrismicDOM = require('prismic-dom');
const prismicConfig = require('./public/libs/utils/prismic-config');

// Routes
const posts = require('./routes/posts');
const index = require('./routes/index');
const about = require('./routes/about');
const author = require('./routes/author');
const advertisers = require('./routes/advertisers');
const contact = require('./routes/contact');
const videos = require('./routes/videos');

// Set ups
app.set('view engine', 'ejs');
app.set('trust proxy', true);

// Config
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use( express.static(path.join(__dirname, 'public')) );
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

app.listen(process.env.PORT || 3000, () => {
    const port = process.env.PORT || 3000;
    const host = process.env.HOST || 'localhost';
    // console.log(`App.js running at http://${host}:${port}`);
});