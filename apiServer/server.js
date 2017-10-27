var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var api = require('./api');

var port = 3001;
var app = express();

app.use(bodyParser.json());
app.use('/api', api)

app.listen(port, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.info('==> 🌎  Listening at http://localhost:%s. API Server start', port);
});