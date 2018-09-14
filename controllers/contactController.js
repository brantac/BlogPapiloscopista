require('dotenv').config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

// Render contact page
exports.contact = (req, res) => {
    res.render('contact', {
        page: 'contact',
        slug: 'contato',
        seo: {
            title: 'Contato | ',
            description: 'Fique por dentro das novidades sobre a papiloscopia' +
            ' no Brasil e no mundo. Compartilhamos conhecimento, compartilhamos cidadania.',
            image: '/img/icones/blog_icon_15px.png'
        }
    });
};

// Google OAuth2
const oauth2client = new OAuth2(
    // ClientID
    process.env.CLIENT_ID,
    // Client Secret
    process.env.CLIENT_SECRET,
    // Redirect URL
    "https://developers.google.com/oauthplayground"
);

oauth2client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
});

const accessToken = oauth2client.refreshAccessToken()
.then(res => res.credentials.access_token);

// send email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken
    }
});

exports.sendMail = (req, res) => {
    transporter.sendMail({
        from: process.env.MAIL_USER,
        to: process.env.MAIL_USER,
        subject: `${req.body.subject}`,
        text: `
        Nome: ${req.body.name}\n
        Email: ${req.body.email}\n
        Número: ${req.body.number}\n
        Mensagem: ${req.body.message}`,
        html: `
        <p>Nome: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <p>Número: ${req.body.number}</p>
        <p>Mensagem: ${req.body.message}</p>`
    }, (error, info) => {
        if (error) {
            res.end(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).end('Mensagem enviada com sucesso.');
        }
    });
};