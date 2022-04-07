const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // devServer: {
  //   proxy: {
  //     'student': {
  //       target: 'http://localhost:5000',
  //       pathRewrite: {
  //         '^/student': ''
  //       },
  //       // ws: true, //用于支持websocket
  //       // changeOrigin: true //用于控制请求头中的host值
  //     },
  //     'car': {
  //       target: 'http://localhost:5001',
  //       pathRewrite: {
  //         '^/car': ''
  //       },
  //       // ws: true, //用于支持websocket
  //       // changeOrigin: true //用于控制请求头中的host值
  //     }

  //   }
  // }
})