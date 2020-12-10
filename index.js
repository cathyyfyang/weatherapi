//app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User = require('./model.js')
 
//设置全局使用
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 
// 设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");// 这里设置允许所有跨域访问
    res.header("Access-Control-Allow-Headers", "Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
 
//响应get请求
app.get('/', function (req, res) {
    res.send('node启动成功');
})
 
//响应post请求
app.post('/', function (req, res) {
    const registerData = JSON.parse(req.body.data); // 解析一下JSON格式数据
    if (registerData) {
        console.log('registerData', registerData);
        res.send(`phone:${registerData.phone},username:${registerData.userName},password:${registerData.passWord}`); // 向前端发送数据
        // 创建模版实例，导入数据，在这之前你可以对数据做任何处理，比如密码md5加密
        const user = new User({
            phone: registerData.phone,
            username: registerData.useName,
            password: registerData.passWord,
            date: (new Date()).getTime()
        })
        // 将数据存入数据库
        user.save(function (err, user) {
            if (err) {
                console.log('err', err);
            } else {
               console.log(user);
            }
        })
    }
})
//监听端口
app.listen(8080, function(){
    console.log('node listen on port 8080');
})
