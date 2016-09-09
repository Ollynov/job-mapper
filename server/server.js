'use strict';

let express = require('express');
let request = require('request');
let path = require('path');
let parser = require('body-parser');
let db = require('./database/index.js');

let app = express();

app.use(parser.json());

app.use(express.static(path.join(__dirname + '/../client/public')));

require('./routes.js')(app, express);

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Connected on port 3000');
});

module.exports = app;
