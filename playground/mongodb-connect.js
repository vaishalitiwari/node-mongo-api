//const MongoClient = require('mongodb').MongoClient;
//using ES6 object destructing
const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('unable to connect to MongoDB server');
  }
  const db=client.db('TodoApp')
  console.log('Connected to MongoDB server');


  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2))
  // });

  // db.collection('Users').insertOne({
  //   name: 'Vaishali',
  //   age: 27,
  //   location: 'Texas'
  // },(err,res)=>{
  //   if(err){
  //     return console.log('Unable to insert User', err);
  //   }
  //   console.log('Inserted : ',JSON.stringify(res.ops,undefined,2));
  //   console.log(res.ops[0]._id.getTimestamp())
  // })
  db.close();
});
