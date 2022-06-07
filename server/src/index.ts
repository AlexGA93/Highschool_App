// http
import http from 'http';
// config
import configuration from './config';
const port = configuration.PORT;

// database
// roles

// server init
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1> Hello World! </h1>")
});

// server listen
server.listen(port, () => console.log(`Server running at port: ${port}`));
