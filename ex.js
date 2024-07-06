var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.send('Welcome to Express Middleware ');
});
app.get('/help',function(req,res){
    res.send('How can I help you?');
});
var server=app.listen(8000,function(){
   
    console.log("Example app listening at http://127.0.0.1:8000");
})