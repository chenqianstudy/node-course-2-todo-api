/*
 * todo.js
 * Todo实体
 * author:chenqian
 * datetime:2018-4-18
 */

const { mongoose } = require('../mongoose');

module.exports.Todo = mongoose.model('Todo',{
	text:{
		type: String,
		required: true,
		trim: true,
		minlength: 1	
	},
	completed:{
		type: Boolean,
		default: false
	},
	completedAt:{
		type: Number,
		default: null
	}
})
