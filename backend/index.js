require('dotenv').config();


const express=require('express')
const mongoose=require('mongoose')
const uri=process.env.MONGO_URL;
const port=process.env.PORT || 3001;

const app=express();


app.listen(3001,()=>{
    console.log(`app is listening on ${port}`);
    mongoose.connect(uri);
    console.log("DB is connected");
})