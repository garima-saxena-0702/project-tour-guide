const express = require('express');
const app = express();
const path = require('path');
const router = require('express').Router();
const loginDbOperations = require('./../database/logindb');

const port = process.env.PORT || 4200;
app.set('port', port);

app.use(express.static(path.join(__dirname, '/dist/project')));

app.get('/', function(req, res) {
  console.log(path.join(__dirname, 'dist/project/index.html'));
    res.sendFile(path.join(__dirname, 'dist/project/index.html'));
});

router.post('/login', (req, res) => {
  loginDbOperations.loginData(req.body).then(result => {
    res.send(result)
  })
});

app.listen( port , function(){
    console.log('Server is running at 4200');
});
