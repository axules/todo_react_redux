const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config')({ dev: true });
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compiler = webpack(webpackConfig);
const express = require('express');
const app = express();

const devMiddleware = webpackDevMiddleware(compiler, {
  //   noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  clientLogLevel: 'error',
  inline: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    timings: false,
    chunks: false,
    chunkModules: false,
  },
});

app.use(devMiddleware);
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  const reqPath = req.url;
  // find the file that the browser is looking for
  const reqPathArray = reqPath.split('/');
  const file = reqPathArray[reqPathArray.length - 1];
  if (['bundle.js', 'index.html'].indexOf(file) !== -1) {
    res.end(devMiddleware.fileSystem.readFileSync(path.join(webpackConfig.output.path, file)));
  } else if (file.indexOf('.') === -1) {
    // if the url does not have an extension, assume they've navigated to something like /home and want index.html
    res.end(devMiddleware.fileSystem.readFileSync(path.join(webpackConfig.output.path, 'index.html')));
  }
});

const PORT = 3003;
app.listen(PORT, (err) => {
  console.log('Server has been started at http://localhost:'+PORT+'/');
  if (err) {
    return console.error(err.message);
  }
});
