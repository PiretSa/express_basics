const express = require('express')
const app = express();
// add public direction
app.use(express.static('public'));

app.get('/user/:username', (req, res)=> {
    // get parameter data from address row
    let user = req.params.username;
    // use this data in template
    res.render('index.ejs', {username : user});
});

app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
});