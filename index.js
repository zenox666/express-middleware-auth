//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended: true}));

function passwordCheck(req,res,next){
    const password = req.body["password"];
    if(password==="ILoveProgramming"){
        next();
    }
    else{
        // res.sendFile(__dirname + "/public/index.html");
        res.redirect("/");
    }
}

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});

app.post("/check",passwordCheck,(req,res)=>{
    res.sendFile(__dirname+"/public/secret.html");
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
