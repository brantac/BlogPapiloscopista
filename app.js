const express = require('express');
const app = express();
const path = require('path');

/* evitar um pouco usar a view engine
app.set('view engine', 'ejs');
app.get('/profile/:name', function (req, res) {
    var data = {age: 25, job: 'student', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});
*/

// arquivos estáticos
app.use(express.static('public'));

// rotas
app.get('/', (req, res) => res.sendFile(__dirname + '/routes/index.html'));
app.get('/contact', (req, res) => res.send('Contact Page'));
app.get('/about', (req, res) => res.send('About Page'));
app.get('/primeiro-post', (req, res) => res.sendFile(__dirname + '/routes/primeiro-post.html'));


app.listen(3000, () => console.log('App.js running at http://localhost:3000'));