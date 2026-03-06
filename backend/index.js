const express=require('express')

const app=express();

const port = 3001;

app.listen(3001,()=>{
    console.log(`app is listening on ${port}`)
})