/*
 * mongodb-delete.js
 * mongo删除操作
 * author:chenqian
 * datetime:2018-4-18
 */


const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if(err){
       return  console.log('Unable to connect the Server');
    }
    console.log('Connect to the Server');

    const db = client.db('TodoApp');
    db.collection('Todos').deleteMany().then((result) => {
        console.log(result);
    })
    
    db.collection('Users').deleteOne({ name: 'chenqian' }).then((result) => {
        console.log(result);
    })
    
    db.collection('Users').findOneAndDelete({ name: 'chenqian'}).then((result) => {
        console.log(result);
    })
    client.close();
})
