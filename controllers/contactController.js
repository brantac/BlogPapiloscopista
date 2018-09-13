const nodemailer = require('nodemailer');

// render contact page
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
}

// send email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'irisamon0@gmail.com',
        pass: 'ir!SpL@gu3ha1'
    }
});

exports.sendMail = (req, res) => {
    transporter.sendMail({
        from: 'irisamon0@gmail.com',
        to: 'irisamon0@gmail.com',
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
            console.log(error);
        } else {
            // console.log('Email sent: ' + info.response);
            res.end('Enviado');
        }
    });
};