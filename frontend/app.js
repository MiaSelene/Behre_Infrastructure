const express = require('express');
const app = express();
var exphbs = require('express-handlebars');

function Logoclick(){
  console.log('this dude be clicking');
}
app.use('/static', express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')


app.get('/', function (req, res) {
  res.render('home');
});
app.listen(3000, () => console.log('jajablabla'));
