/*
 * server.js
 * node程序入口
 * author:chenqian
 * datetime:2018-4-18
 */
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const { mongoose } = require('./mongoose');
const { User } = require('./models/user');
const { Todo } = require('./models/todo');

const app = express();
app.use(bodyParser.json());

app.post('/todos', (req,res) => {
	const todo = new Todo({
		text: req.body.text
	});
	
	todo.save().then((doc) =>{
		res.send(doc);
	}).catch((err) => {
		res.status(400).send(err);
	})
})

app.listen(config.port,() =>{
	console.log('Started on port ' + config.port);
})


module.exports = {
	app
}
