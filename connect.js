let dbcon = require('./db');
async function insert(user,email,pass,phone){
    let client = await dbcon.getclt();
    try{
    let db = await client.db("notesapp");
    let coll = await db.collection("documents");


    tb= {"username" : user,
        "email":email,
        "password":pass,
        "phone":phone};
    await coll.insertOne(tb);
    }
    catch{
        console.error;
    }
    finally{
    await client.close();
    }
}

async function finduser(email,pass){
    let client = await dbcon.getclt();
    try{
        let db = await client.db("notesapp");
        let coll = await db.collection("documents");

        query = {
            "email":email,
            "password":pass
        }
        useris = await coll.find(query).toArray();
        console.log("Entered")
        return useris;
    }
    catch{

    }
    finally{
        await client.close();
    }
}

module.exports = {insert,finduser};
