var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

let port = process.env.PORT || 3000;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath
  })
  .listen(port, '0.0.0.0', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Running at http://0.0.0.0:'+port);
  });
