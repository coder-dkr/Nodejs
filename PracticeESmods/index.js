import add from './module.mjs';
import http from 'http';

let heaven = add(5,10);
const port = 4000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('content-Type','text/html')

    if(req.url === '/'){
        res.end(`<title>Test server</title><p id="evn">The sum of 5,10 is ${heaven}</p><style>p{background-color:red; height:50vh;display:flex;justify-content:center;align-items:center;}</style><script>let evn = document.getElementById("evn"); evn.addEventListener("mouseover",()=>{evn.style.background = "green";});
        evn.addEventListener("mouseout",()=>{evn.style.background = "red";});</script>`)
        
    }

})

server.listen(port,() => {
    console.log(`http://localhost:${port}`)
})  
