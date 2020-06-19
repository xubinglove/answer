const path = require('path');
const px2rem = require('postcss-px2rem-exclude')

const postcss = px2rem({
  remUnit: 75, //基准大小 baseSize，需要和rem.js中相同
  exclude: /node_modules|folder_name/i
})

function resolve(dir = '') {
  return path.join(__dirname, './src', dir);
}

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/rttpage': {
        target: '',
        ws: false,
        changeOrigin:true,//允许跨域
        pathRewrite: {
          '^/': '/'
        }
      }
    },
   
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('components'),
        '@CFG': resolve('config.js'),
      }
    }
  }
}