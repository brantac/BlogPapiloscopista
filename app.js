const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/contact', (req, res) => res.send('Contact Page'));

app.get('/about', (req, res) => res.send('About Page'));

app.listen(3000, () => console.log('App.js running at http://localhost:3000'));