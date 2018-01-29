/**
 * Simple node js server
 * 
 */
const http = require('http');
const fs   = require('fs');

const host = '127.0.0.1';
const port = '3001';

fs.readFile('./index.html', (err, html) => {
    if (err) {
        console.error('error reading the \'index.html\' file ');
    } else {

        const server = http.createServer((req, res)=> {
            console.log('received request');
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(html);
            res.end();
        
        });
        
        server.listen(port, host, ()=>{
            console.log('Server started!! Listening on '+host+':'+port);
        });
        
    }
})

