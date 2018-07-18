///{([^{]+)}/g
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static('public'))

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

//treelist

server.listen(process.env.PORT || 8080);

io.on('connection', function(client) {
    console.log('Client connected...');

    client.on('login', function(data) {
           console.log(data);
           data.Text = data.id;
           logins.push(data);
    });

    client.on('session card', function(data) {
           console.log(data);
           data.Text = data.id;
           cards.push(data);
    });

    client.on('admin request', function(data) {
            data.Text = data.id;
           client.emit('admin data', { logins: logins, cards: cards });
    });

});
