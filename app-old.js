
const http = require('http'); //viene por defecto en node

//recibe un callback
//req ->solicitud /
http.createServer((req, res)=>{

    res.writeHead(200, { 'Content-type': 'application/json'});

    let salida = {
        nombre: 'alexander',
        edad: 24,
        url: req.url
    }

    res.write( JSON.stringify(salida));

    // res.write('Hola mundo');
    res.end(); //terminar la respuesta
})
.listen(8080);

console.log('Escuchando el puerto 8080');

//node app