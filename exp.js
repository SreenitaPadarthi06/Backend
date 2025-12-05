import express from 'express';
const app=express();
app.get('/users',(req,res)=>{
    res.send("hello this is from backend");
})
app.get('/get-users',(req,res)=>{
    res.send("hello this is from backend");
})
app.listen(7007,()=>{
    console.log("serever running at port 7007")
});