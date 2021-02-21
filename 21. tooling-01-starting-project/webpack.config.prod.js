// Import the path package so that I can configure webpack
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');


module.exports = {
     //Tell the webpack compiler what mode I am bundling for
     mode: 'production',
     //Tell the webpack compiler where my entry point or input file is located
     entry: './src/app.js',
     output: {// Specify the output path or folder and file name
          filename: /* can replace app.js with [contenthash].js */'app.js', //Output file name
          path: path.resolve(__dirname, 'assets', 'scripts'), //Ouput folder location
//Tell webpack where the output files are located so that it finds them 
          publicPath: 'assets/scripts/'
     },
     devtool: 'cheap-source-map',
     //, You would need the following if the index.html file or any html files you are serving up aren't on the root of the project
     // devServer: {
     //      constentBase: './index.html'
     // }//use the code below to clean the scripts folder
     // plugins: [
     //      new CleanPlugin.CleanWebpackPlugin()
     // ]
};