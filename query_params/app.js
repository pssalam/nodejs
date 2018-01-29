
const http = require('http');
const url = require('url');

const host = '127.0.0.1';
const port = '3001';

const server = http.createServer((req,res)=>{
    var queryData = url.parse(req.url, true).query;
    console.log(queryData);
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.setHeader('Content-type', 'application/json');
    res.write(JSON.stringify(queryData));
    res.end();
}
);

server.listen(port, host, ()=>{
    console.log('Server started succsessfully!!!')
})