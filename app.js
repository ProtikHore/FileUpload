var express = require('express');
var app = express();
var upload = require('express-fileupload');

var home = require('./controllers/home');
app.set('view engine', 'ejs');

//app.use(upload());
app.use('/home', home);
app.use(upload());


/*app.get('/', function(request, response) {

  response.redirect('/home');

});*/

app.listen(1234, function() {

  console.log('Server Started......');

})
