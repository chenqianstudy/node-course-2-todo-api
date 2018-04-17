/*
 * mongodb-count.js
 * count操作
 * author:chenqian
 * datetime: 2018-4-17
 */

const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
	if(err){
		return console.log('Unable to connect Server');
	}
	console.log('Connect to the Server');

	const db = client.db('TodoApp');
	
	db.collection('Todos').find().count()
		.then((count) => {
			console.log(`Todos count: ${count}`);
		}).catch((err) => {
			console.log('Unable to fetch todos',err);
		})
	client.close();
})
