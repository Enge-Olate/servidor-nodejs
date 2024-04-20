const http = require('http');
const file = require('fs');

const server = http.createServer((req, res)=>{
    // res.statusCode=200;
    // res.setHeader('content-type', 'text/plain');
    // res.end('Olá!');

    // file.readFile('index.html','utf-8', (err, data)=>{
    //     res.writeHead(200,'content-type', 'text/html');
    //     res.write(data);
    //     res.end();
    // });
    file.readFile('new.txt','utf-8',(err,data)=>{
        res.writeHead(200,'content-type','text/txt');
        res.write(data);
        res.end();
    });
});

file.appendFile('new.txt','outro doc',function(err){
    if(err)throw err;

});



server.listen(3000);