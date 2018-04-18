/*
 * user.js
 * 定义用户模型
 * author:chenqian
 * datetime:2018-4-18
 */
const mongoose = require('mongoose');

module.exports = User = mongoose.model('User',{
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});
