//把路由封装成模块
const proxy = require('http-proxy-middleware');
const express = require('express');

// 引入单独路由模块
// const userRouter = require('./user');
// const goodsRouter = require('./goods')
// const categoryRouter = require('./category')
// const uploadRouter = require('./upload')

let Router = express.Router();

Router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.header("Access-Control-Allow-Credentials","true");

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

Router.use('/zdmapi', proxy({
  "target": "http://www.zhongdamen.com/mobile/index.php",
  "changeOrigin": true,
  "pathRewrite": {
      "^/zdmapi" : "/"
  }
}));

module.exports = Router;