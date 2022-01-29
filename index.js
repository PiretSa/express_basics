const express = require('express')
const app = express()

const path = require('path')

// add views directory path
app.set('views', path.join(__dirname, 'views'))
// add views template engine
app.set('view engine', 'ejs')

app.get('/questions', (req, res)=> {

    let questions = [
        {title: "What is Node.js?", user : "Kadi", votes : "10"},
        {title: "What is Express.js?", user : "Miki", votes : "8"}
    ]

    res.render('index', {questions:questions})
})

app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
});