let dbcon = require('./connect');

async function createuser(req,res){
    await dbcon.insert(req.body.user,req.body.email,req.body.pass,req.body.phone).then(()=>{
        res.send("Created User");
    })
    .catch(()=>{
        res.send("Error creating user");
    })
}

let user;

async function loginuser(req,res){
    console.log("email :",req.body.email)
    user = await dbcon.finduser(req.body.email,req.body.pass)
        //.then(()=>{
            console.log("user = "+user.length)
            if(user.length>0){
                for(i of user){
                    res.send("Login accepted - user "+i.username);
                }
            }
            else
            res.send("User not found")
       // })
        //.catch(console.error)
}
module.exports={createuser,loginuser}