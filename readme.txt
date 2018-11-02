https://github.com/selbekk/webpack-with-less-example
https://bendyworks.com/blog/getting-started-with-webpack-dev-server
https://github.com/juristr/webpack-typescript-starter
https://github.com/webpack-contrib/less-loader
https://webpack.js.org/guides/typescript/
https://webpack.js.org/
https://www.valentinog.com/blog/webpack-tutorial/



  "scripts": {
    "start": "webpack-dev-server --port 4110 --open --inline --watch --progress --profile --colors --content-base src/ --mode development",
    "build": "webpack --config webpack.config.js --mode production",
    "build.prod": "webpack --config webpack.config.js -p",
    "test": "karma start karma.config.js"
  },
