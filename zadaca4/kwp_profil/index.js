const express = require('express')
const app= express();

app.get('/',(req,res)=> {
    res.send('Hello world');
});
app.listen(3000, ()=> console.log('RADDIIII0'));

app.use('**', function(req, res){
    res.sendFile(path.join(__dirname, '../client/index.html'))});