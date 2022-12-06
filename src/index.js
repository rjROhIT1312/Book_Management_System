const express=require('express')
const mongoose=require('mongoose')
const route=require('./route/route')
const app=express()

const multer= require("multer");
const { AppConfig } = require('aws-sdk');

app.use(express.json())

app.use( multer().any())

mongoose.connect("mongodb+srv://sarwjeet424:96568437528p@cluster0.8tsocgw.mongodb.net/group37Database",{useNewUrlParser:true})
.then(()=> console.log("MongoDB connected"))
.catch((err)=> console.log(err))
app.listen(3000,function(){
    console.log("Connected on Port 3000")
})

app.use('/',route)