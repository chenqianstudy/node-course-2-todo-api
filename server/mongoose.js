/*
 * dbconnect.js
 * mongodb 数据库连接器
 * author:chenqian
 * datetime:2018-4-18
 */

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
}
