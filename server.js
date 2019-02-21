var express = require("express");
var bodyParser = require("body-parser");


var app = express();

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.json());



var exphbs = require("express-handlebars");

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require("./controller/burgersController");

app.use(routes);

var PORT = process.env.PORT || 8080;
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});