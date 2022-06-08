// http
import http from 'http';
// config
import configuration from './config';
const port = configuration.NODEPORT;

import mysql from 'mysql';

// database
require('./database/database');

// server init
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1> Hello World! </h1>")
});

// get example;

// server listen
server.listen(port, () => {
    console.log(`Server running at port: ${port}`)
});
