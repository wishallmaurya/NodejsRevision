const express = require('express');

const app = express();

//? Home page
app.get('/', (req, res) => {
    res.render('06-index.ejs')
    // console.log(req.url); 
})

app.get('/table', (req, res) => {
   
    res.render('08-table.ejs')
})


app.listen(3000, () => {
    console.log(`Server is listening on 3000`);
})

