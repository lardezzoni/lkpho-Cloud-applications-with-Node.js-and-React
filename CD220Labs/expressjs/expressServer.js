'use strict';

const express = require('express');
const app = new express();
const fs = require('fs');
const path = require('path');
const log = console.log;
const folder = './';

let loginDetails = [];

app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

app.get("/loginDetails",(req,res)=>{
    res.send(JSON.stringify(loginDetails));
})

app.post("/login/:name",(req,res)=>{
    loginDetails.push({"name":req.params.name,"login_time":new Date()});
    res.send(req.params.name + ", You are logged in!")
})

app.get("/:name",(req,res)=>{
    res.send("Hello "+req.params.name)
})

app.get("/fetchMonth/:num", (req,res) => {

    //fs.readdirSync( folder ).forEach( file => {
   
      //  const extname = path.extname( file );
        //const filename = path.basename( file, extname );
        //const absolutePath = path.resolve( folder, file );
     
        //res.send( "File : ", file );
        //res.send( "filename : ", filename );
        //res.send( "extname : ", extname );
        //res.send( "absolutePath : ", absolutePath);
     
     //}); 
    let jsonMonth = new Object();
    let num = parseInt(req.params.num);
    if(num<1 || num>12){
        res.send("error");
    }
    else{}
    //reads the json file and copy it
    var data = JSON.parse(fs.readFileSync('/home/project/lkpho-Cloud-applications-with-Node.js-and-React/CD220Labs/expressjs/months.json'));

    
    res.send(data);

})
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})
