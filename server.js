const { urlencoded } = require('express');
const express = require ('express');
const app = express();  // Express Applicn

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'hbs'); // Set View Engine to HBS

let tasks = [];

app.get('/', (req, res)=>{
    res.render('home', {
        title: 'Todo List',
        tasks: tasks
    }); 
});

app.post('/', (req, res)=>{
    tasks.push(req.body.newtask); // enters data into form 
    res.redirect('/'); // initiates a GET request
});

// We first setup the Applicn, and then run the server
app.listen(5555, ()=>{  
    console.log('started server at localhost:5555');
});