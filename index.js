const express = require('express');
const app = express();

const mongoose = require("mongoose")
const dishes = require('./models/dish');
const url = 'mongodb://localhost:27017/MERN'
const connect = mongoose.connect(url);

connect.then((db)=>{
    console.log('Connected correctly to server');
  },(err)=>{console.log(err)});

const hostname = "localhost";
const port = 3000;

const leadersRouter = require('./public/leaders');



app.use('/leaders',leadersRouter);


app.listen(port,hostname,()=>{
    console.log(`Connected Successfully at http://${hostname}:${port}`)
})

