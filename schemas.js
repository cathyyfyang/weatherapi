
// schemas.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// 创建数据结构
const userSchema = new Schema({
    phone: String,
    username: String,
    password: String,
    date: { type: Date, default: Date.now }// 这里加一个注册日期
})

module.exports = userSchema;
