var express = require('express');
const path = require('path'); 

var app = express(); 

app.get('/' , function(req, res){
    res.sendFile(__dirname + '/index.html'); 
})
app.get('/anotherpage' , function(req, res){
    res.sendFile(__dirname + '/newpage.html'); 
})

app.listen(3000, function(){
    console.log("App listening on port 3000."); 
})
