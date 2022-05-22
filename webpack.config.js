const path = require('path'); // a variable provided by a node.js method representing the absolute path
const Dotenv = require('dotenv-webpack'); // third party package to hide environment variables in webpack
 
module.exports = { // the object webpack will look for within webpack.config.js with your webpack settings
  mode: 'development',
  entry: './src/app.ts', // entry point webpack looks at first before proceeding to imports
  performance: {
    hints: false,
  },
  output: {
    filename: 'bundle.js', // what you will name the resulting bundled javascript from webpack
    path: path.resolve( __dirname, 'dist' ), // folder on disk where bundled js should go
    clean: true,  // clears contents of dist folder prior to each build
    publicPath: '/dist/' // where javascript files should be accessed by the browser
  },
  devtool: 'inline-source-map', // allows you to debug/view .js and .ts files in the browser
  module: {
    rules: [
      {
        test: /\.ts$/, // look for files ending in .ts
        use: 'ts-loader', // what webpack will use to translate typescript to javascript
        exclude: /node_modules/ // do not include files within the node_modules folder
      }
    ]
  },
  devServer: {
    open: true,
    static:  {
      directory: path.resolve( __dirname, './' ),
    },
    compress: true,
    port: 3000 // the port webpack will use to serve your webpage
  },
  resolve: {  
    extensions: [
      '.ts',
      '.js'
    ]
  },
  plugins: [
    new Dotenv({
      path: './.env',
      safe: true,
    })
  ]
};

/*
-----WEBPACK.CONFIG.JS AS PER LESSON RESOURCES (old)-----

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};

*/