/*
 * mongoose-validation.js
 * 学习mongoosevalidation模块
 * author:chenqian
 * datetime:2018-4-18
 */

const mongoose = require('mongoose');
const assert = require('assert');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const schema =  mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Cat = mongoose.model('Cat',schema);

const cat = new Cat();
cat.save().catch((err) => {
    assert.equal(err.errors['name'].message,'Path `name` is required.');
    err = cat.validateSync()
    assert.equal(err.errors['name'].message,'Path `name` is required.');
    console.log('require failed');
})


const breakfastSchema = new dddSchedm({
    eggs:{
        type: Number,
        min: [6,'Too few eggs'],
        max: 12
    },
    bacon: {
        type: Number,
        required: [true, 'Why no bacon?']
    },
    drink: {
        type: String,
        enum: ['Coffee','Tea'],
        required: function(){
            return this.bacon > 3;
        }
    }
});    

const Breakfast = mongoose.model('Breakfast', breakfastSchema)

const badBreakfast = new Breakfast({
    eggs: 2,
    bacon: 0,
    drink: 'Milk'
});

const err = badBreakfast.validateSync();
console.log(JSON.stringify(err,undefined,2));
