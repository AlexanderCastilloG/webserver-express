
const express = require('express'); 
const app = express(); //declara una variable de la función EXPRESS

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;



//crear un middleware, definir una carpeta publica
app.use(express.static(__dirname + '/public'));


// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) =>{
    // res.send(salida);
    res.render('home', {nombre: 'aleXANder castiLLO '});
}); 

app.get('/about', (req, res)=>{
    res.render('about');
})
//recibe un callback
app.listen(port, ()=>{
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});


// app.get('/data', (req, res)=>{
//     res.send('Hola data');
// });
// app.listen(3000);