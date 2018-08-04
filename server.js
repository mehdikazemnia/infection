const express = require('express');
const server = express();

// public folder
server.use(express.static('./public'));

server.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

server.listen(3000);