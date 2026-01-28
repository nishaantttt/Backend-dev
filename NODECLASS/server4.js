const fs= require("fs")

const http = require("http")

const server = http.createServer((req,res)=>{

    console.log(req.url);
    if(req.url === "/" && req.method === "GET"){
        res.writeHead(200,{
            "Content-type" : "text/plain"
        })

        res.end("WElcome");
    }
    else if(req.url === "/about" && req.method === "GET"){
        fs.readFile("./public2/about.html","utf-8",(err,data)=>{
            if(err){
                res.writeHead(500)
                return res.end("server-err")
            }
            res.writeHead(200,{
                "Content-type" : "text/html"
            })
            res.end(data)
        })
    }
    else{
        res.writeHead(404,{
            "Content-type" : "text/html"
        })
        res.end("404 not found")
    }
})

server.listen(3000,()=>{
    console.log("Server running on port 3000");
})
