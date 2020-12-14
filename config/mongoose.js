let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/learning');

let db = mongoose.connection;

db.on('error', console.error.bind(`Error connecting to db`));

db.once('open', function(){
    console.log(`Connected to db`);
})

module.exports = db;