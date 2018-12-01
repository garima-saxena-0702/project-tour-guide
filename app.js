const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 4200;
app.set('port', port);

app.use(express.static(path.join(__dirname, '/dist/project')));

app.get('/', function(req, res) {
  console.log(path.join(__dirname, 'dist/project/index.html'));
    res.sendFile(path.join(__dirname, 'dist/project/index.html'));
});

app.listen( port , function(){
    console.log('Server is running at 4200');
});
