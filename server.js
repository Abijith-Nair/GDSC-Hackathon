let express = require('express');
let app = express();
let bodyparser = require('body-parser');

let func = require('./functions/functions');

app.use(bodyparser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.send("hello");
})

app.post('/signup',(req,res)=>{
    console.log("Entered");
    if(req.body.pass !== req.body.passcon)
    {
        res.send("Passwords not matching");
    }
    else{
    console.log(req.body.user);
    func.createuser(req,res);
    }
    
})

app.post('/login',(req,res)=>{
    func.loginuser(req,res);
})

const server = app.listen(8011,()=>{
    console.log("server started in port "+server.address().port);
});