const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('unable to connect to MongoDB server');
  }
  const db=client.db('TodoApp')
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Users').deleteMany({name:'Vaishali'}).then((res)=>{
  //   console.log(res);
  // },(err)=>{
  //   console.log('Unable to delete todo', error);
  // })
  //deleteOne
  db.collection('Users').deleteOne({_id:new ObjectID('5a7baec9e656df72e8985ff2')}).then((res)=>{
    console.log(res);
  })
  // findOneAndDelete

  // db.collection('Todos').findOneAndDelete({completed: false}).then((doc)=>{
  //   console.log(doc);
  // })


  //db.close();
});
