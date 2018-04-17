/*
 * mongodb-connect.js 
 * 连接mongodb数据库
 * author:chenqian
 * datetime:2018-4-17
 */

const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
	if(err){
		console.log('Unable to connect to MongoDB server');
		return;
	}
	console.log('Connected to MongoDB Server');

	const db = client.db('TodoApp');
	db.collection('Todos').insertOne({
		text: 'Something to do',
		complated: true
	},(err,result) => {
		if(err){
			return console.log('Unable to insert todo',err);
		}
		console.log(JSON.stringify(result.ops,undefined,2))
	});

	db.collection('Users').insertOne({
		name: 'chenqian',
		age: 30,
		location: 'Philadelphia'
	},(err,result) => {
		if(err){
			return console.log('Unable to insert users',err);
		}
		console.log(JSON.stringify(result.ops,undefined,2));
		console.log(result.ops[0]._id.getTimestamp());
	})
	client.close();
});
