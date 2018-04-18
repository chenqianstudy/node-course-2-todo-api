/*
 * server.js
 * node程序入口
 * author:chenqian
 * datetime:2018-4-18
 */

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp')

const Todo = mongoose.model('Todo',{
    text: {
        type: String
    },
    completed:{
        type: Boolean
    },
    completedAt:{
        type: Number
    }
});


let newTodo = new Todo({
    text: 'Cook dinner'
});


newTodo.save().then((doc) => {
    console.log('Saved todo',doc);
},(err) => {
    console.log('Unable to save todo',err);
}).catch((err) => {
    console.log(err);
});


let newOtherTodo = new Todo({
    text: 'Feed the cat',
    completed: true,
    completedAt: 123
})


newOtherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc,undefined,2));
}).catch((err) => {
    console.log('Unable to save',err);
})
