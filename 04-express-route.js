const express=require('express');

const app=express();

//? Home page
app.get('/',(req,res)=>{
    res.send(`<div>
    <h1>This is Home Page<h1> 
    <hr/> 
    <a href='/courses'> Go to Courses </a>
    <br/>
    <a href='/student'> Go to Students </a>
    
    <div/>`)
    console.log(req.url);
})
const courses = [
    { name: "Exprss JS", author: "Virendra" },
    { name: "React JS", author: "Himanshu" },
  ];
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

