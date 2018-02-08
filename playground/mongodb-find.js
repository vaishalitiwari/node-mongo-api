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

  // db.collection('Todos').find({
  //   _id:new ObjectID('5a7ba8b864920f4d4014b2f5')
  // }).toArray().then((docs)=>{
  //   console.log('Todos', JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos ',err);
  // });

  db.collection('Todos').find().count().then((count)=>{
    console.log(`Todos count: ${count}`);
  },(err)=>{
    console.log('Unable to fetch todos count ',err);
  });

  db.collection('Users').find({name:'Vaishali'}).toArray().then((finUser)=>{
    console.log('Users', JSON.stringify(finUser,undefined,2));
  },(err)=>{
    console.log('Unable to fetch user ',err);
  });
  //db.close();
});
