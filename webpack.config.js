var path = require('path');

module.exports = {  
  entry: path.resolve(__dirname, './src/app.js'),
  output: {
    path: path.resolve(__dirname, './bin'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/, 
        loader: 'babel-loader', 
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules', 'prosemirror')
        ],
        // Need this here for prosemirror til it has own .babelrc
        query: {
          presets: ['es2015']
        }
      }]
  }
};