const express = require('express');
const bodyParser = require('body-parser');
const environment = require('../src/controller/environment.controller');

const app = express();

app.use(bodyParser.json());

app.use('/environment', environment);

app.use((error, req, res, next) => res.send(error.message));

module.exports = app;
