const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/dist/project')));

app.get('/', function(req, res) {
  console.log(path.join(__dirname, 'dist/project/index.html'));
    res.sendFile(path.join(__dirname, 'dist/project/index.html'));
});

app.listen( 4200, function(){
    console.log('Server is running at 4200');
});
