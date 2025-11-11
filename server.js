//importo modulo
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.end('<h1>ciao sono collegato sul server</h1>')
});
server.listen(8888, 'localhost', () => {
    console.log('server attivo su http://localhost:8888');
})