const express=require('express');

const app=express();

//? Home page
app.get('/',(req,res)=>{
res.sendfile('05-index.html')
    // console.log(req.url); 
})

app.get('/courses',(req,res)=>{ 
    res.send(`<h1>List of Courses <h1> 
    <hr/> 
    <br/>
    <a href='/'> Go to Home Page </a>`)
})

app.get('/student',(req,res)=>{
    res.json({
        students:{
            name:"Vishal",
        }
    })
})

app.listen(3000,()=>{
    console.log(`Server is listening on 3000`);
})

    