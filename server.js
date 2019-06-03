//dependencies 
var express = require('express');
var bodyParser = require('body-parser');
var expressHBS = require('express-handlebars');
var methodOR = require('method-override');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

// Serves static content for the app from the "public" directory in the application directory


//Parse application body as JSON
app.use(bodyParser.urlencoded({
    extended: false
}));

// Set Handlebars 
app.use(methodOR('_method'));
app.engine('handlebars',expressHBS({
    defaultLayout:'main'
}));

app.set('view engine', 'handlebars');

app.use(express.static(path.join(_dirname,'public')));

// Import routes and give the server access to them.
var routes = require('./controllers/burgers_controller.js');

//Start server so that it can begin listening to client requests.

    //Log (server-side) when server has started
    console.log("Server listening on: http://localhost:" + PORT);