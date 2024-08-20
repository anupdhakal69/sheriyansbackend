const http = require('http')
const server = http.createServer((req,res)=>{
    res.end("Hello world! This is just another server")
})

server.listen(4000)