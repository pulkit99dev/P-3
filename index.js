const express = require('express');
const port = 9000;
const expressLayouts= require('express-ejs-layouts');
let db = require('./config/mongoose');

let app = express();

//parsing form data
app.use(express.urlencoded());

// calling static files
app.use(express.static('./assets'));


//setting up view engine & views
app.set('view engine', 'ejs');
app.set('views', './views');

//setting up express ejs layouts
app.use(expressLayouts);

//setting up styles & scripts from other ejs files & into layout.ejs 
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//setting up routes
app.use('/', require('./routes/index'));



// server ceated
app.listen(port, function(err){
    if(err){
        console.log('Error')
    }
    console.log(`Server is up & running on port ${port}`);
})