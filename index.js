import http from 'http';
const server=http.createServer((req,res)=>{
    console.log(req.method);
    if(req.url==="/users"){
        res.writeHead(200,{"content-Type":"application/json"});
        res.end(JSON.stringify({name:"thub"}))
    }
    else{
        res.writeHead(200,{"content-Type":"text/plain"});
        res.end("Hello all")
    }
});
server.listen(7004,()=>{
    console.log(`Server ${7004}`)
})