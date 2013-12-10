/**
 * Created by vladimir on 12/10/13.
 */
var express = require('express');
var digitsch = require('./firstt');
var app = express();

app.get('/:a/', function(req, res) {
  res.send(digitsch.getminmaxd(parseInt(req.params.a)));
});

app.listen(3100);
