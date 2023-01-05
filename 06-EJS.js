const express = require('express');

const app = express();

//? Home page
app.get('/', (req, res) => {
    res.render('06-index.ejs')
    // console.log(req.url); 
})

app.get('/courses', (req, res) => {
    let number = ~~(Math.random()*100);//go to ejs file in pre tag
    res.render('06-courses.ejs', { number: number })
})

app.get('/student', (req, res) => {
    res.json({
        students: {
            name: "Vishal",
        }
    })
})

app.listen(3000, () => {
    console.log(`Server is listening on 3000`);
})

