const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config')();
const express = require('express');
const fs = require('fs');
var compression = require('compression');
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.end(fs.readFileSync(path.join(webpackConfig.output.path, 'index.html')));
});

app.listen(3003, (err) => {
  if (err) {
    return console.error(err.message);
  }
});