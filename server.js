var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes 
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function (){
    console.log("Server listen on: http://localhost:"+ PORT);
});
