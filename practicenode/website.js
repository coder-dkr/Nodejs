const http = require('http');
const fs = require('fs');
const data = require('./data')


const port = 2300;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html')

    if (req.url === '/') {
        res.end('<h1>Hello Dhruv</h1><p>this is dhruves server</p>')
    }
    else if (req.url === '/about') {
        res.end('<h1>Server About</h1><p>Dhruv is a good boy</p>');

    }
    else if (req.url === '/contact') {
        res.end('<h1>contact dhruv</h1><p>call me muah</p>')
    }
    else if (req.url == '/red') {
        const red = fs.readFileSync("red.html")
        res.end(red.toString());
    }
    else if (req.url == '/yellow') {
       
        try{
            fs.writeFileSync('yellow.html',data);
         

        }
        catch(err){
            console.log("we got an ERROR");
        }
       const alpha = fs.readFileSync('yellow.html');
       res.end(alpha.toString());
       
    }
    else {
        res.statusCode = 404;
        res.end("<h1>ERROR 404</h1> <p>Page not found</p>")
    }
});

server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})
