const nodemailer = require('nodemailer');

// render contact page
exports.contact = (req, res) => {
    res.render('contact', {
        page: 'contact',
        slug: ''
    });
}

// send email
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'art.brant06@gmail.com',
//         pass: 'aaa'
//     }
// });
// const options = {
//     from: '',
//     to: '',
//     subject: '',
//     text: ''
// };
// transporter.sendMail(options, (error, info) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });
// exports.send = (req, res) => {

// };