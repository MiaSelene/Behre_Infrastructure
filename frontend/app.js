const express = require('express');
const app = express();
var exphbs = require('express-handlebars');

app.use('/static', express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')


app.get('/home', function (req, res) {
  res.render('home');
});
app.get('/settings', function (req, res) {
  res.render('settings');
});
app.listen(3000, () => console.log('jajablabla'));
