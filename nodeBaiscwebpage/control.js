const http = require('http');
const fs = require('fs')
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
   res.statusCode = 200;
   res.setHeader('content-Type','text/html');
   
   if(req.url === '/'){
    const home = fs.readFileSync('home.html');
    res.end(home.toString());
   }
   else if(req.url === '/home'){
    const home = fs.readFileSync('home.html');
    res.end(home.toString());
   }
   else if(req.url === '/about'){
    const about = fs.readFileSync('about.html');
    res.end(about.toString());
   }
   else if(req.url === '/contact'){
    const contact = fs.readFileSync('contact.html');
    res.end(contact.toString());
   }

})

server.listen(port,()=>{
    console.log(`server is listening to http://localhost:${port}`)
})