const http = require('http');
const file = require('fs');

const server = http.createServer((req, res) => {
    // res.statusCode=200;
    // res.setHeader('content-type', 'text/plain');
    // res.end('Olá!');

    //Lendo arquivo 'index.html'.
    // file.readFile('index.html','utf-8', (err, data)=>{
    //     res.writeHead(200,'content-type', 'text/html');
    //     res.write(data);
    //     res.end();
    // });
});
//Adicionando arquivo 'new.txt'.    
// file.appendFile('new.txt', '\noutro doc', function (err) {
//     if (err) throw err;
// });


//Lendo arquivo 'new.txt'.
// file.readFile('new.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//Deletando arquivo 'new.txt'.
// file.unlink('new.txt', function () {
//     console.log('arquivo removido.');
// });

//Renomeando arquivo.
// file.rename('new.txt', 'new2.txt', function(err){
//     if(err)throw err;
//     console.log('arquivo renomeado');
// });

//Lendo inputs
// 

//Expotando módulos.
const newModulo=require('./modulo');
//Exportando classes.
const Modulo = require('./modulo');
new Modulo();
//Servidor ouvindo na porta 3000.
server.listen(3000);