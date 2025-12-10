import express from "express";
import router from './Router/studentRouter.js';
const app=express();
app.use(express.json());
app.use('/api',router)
app.get('/get-user',(req,res)=>{
    res.send("api success");
})
app.post('/add-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    res.send("data added");
});

app.put('/put-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    res.send("Request accepted");
});
app.delete('/delete-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    res.send("Deleted Successfully");
});
app.listen(9000,()=>{
    console.log("Listen");
});

