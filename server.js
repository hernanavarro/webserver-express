const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));
require('./hbs/helpers');

const port = process.env.PORT || 3000;


//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'hernan'
    });
});

app.get('/about', (req, res) => {

    res.render('about', {});
});

app.listen(port, () => {
    console.log(`Escuchando epeticiones en el puerto ${port}`);
})