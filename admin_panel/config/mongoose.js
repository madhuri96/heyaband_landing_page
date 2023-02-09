const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://root:root@cluster0.pkckivv.mongodb.net/heyabandDB?retryWrites=true&w=majority',{useNewUrlParser: true});  

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;