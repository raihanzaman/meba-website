const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3500;

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile('./index.html', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end("Error loading index.html");
            }
            res.end(data);
        });
    } else if (req.url === '/style.css') {
        res.writeHead(200, { "Content-Type": "text/css" });
        fs.readFile('./style.css', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end("Error loading style.css");
            }
            res.end(data);
        });
    } else if (req.url === '/main.js') {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        fs.readFile('./main.js', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end("Error loading style.css");
            }
            res.end(data);
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
