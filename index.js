const express = require('express');
const port = 9000;

let app = express();

app.listen(port, function(err){
    if(err){
        console.log(`Server not connected`);
    }
    console.log(`Server is up & running at port ${port}`);
});