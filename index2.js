const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on("request", (req, res)   => {
    fs.readFile("index.html" , (err , data)=>{
        res.end(data)
    });
});

server.listen(5000, () => console.log("Server Started"))
