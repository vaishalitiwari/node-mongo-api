const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('unable to connect to MongoDB server');
  }
  const db=client.db('TodoApp')
  console.log('Connected to MongoDB server');

  //findOneAndUpdate
  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('5a7c91d001b94b82ea48902b')
  },{
    $set:{
      name : 'Vaishali'
    },
    $inc:{
      Age : 1
    }
  },{
      returnOriginal: false
    }
  ).then((doc)=>{
      console.log(doc);
    });

  //db.close();
});
