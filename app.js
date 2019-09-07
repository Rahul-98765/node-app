const http = require("http");


const port = process.env.PORT || 9000;
const NODE_ENV = process.env.NODE_ENV;
const NODE_TEST = process.env.NODE_TEST

const server = http.createServer((req,res) =>{
    console.log('server received request');
    res.end(`Hello World at port ${port} ${NODE_ENV} ${NODE_TEST}`);
})

server.listen(port, err =>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`server listening at port ${port}`);
    }
})
