/*
 * mongodb-find.js
 * 查找数据
 * author:chenqian
 * datetime:2018-34-17
 */

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
	if(err){
		return console.log('Unable to connect Server',err);
	}
	console.log('connect to the Server');

	const db = client.db('TodoApp');

	db.collection('Todos').find().toArray()
			.then((docs) => {
				console.log(JSON.stringify(docs,undefined,2));
			}).catch((err) => {
				console.log('Unable to fetch todos',err);
			});

	db.collection('Todos').find({ complated: false}).toArray()
			.then((docs) => {
				console.log(JSON.stringify(docs,undefined,2));
			}).catch((err) => {
				console.log('Unable to fetch todos',err);
			})

	db.collection('Todos').find({ _id : new ObjectID('5ad612689a41f4589a961736') }).toArray()
			.then((docs) => {
				console.log(JSON.stringify(docs,undefined,2));
			}).catch((err) => {
				console.log('Unable to fetch todo ',err);
			})
	client.close();
})

