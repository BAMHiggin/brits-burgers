let express = require("express");

//sql/available port OR 8080
var PORT = process.env.PORT || 8080;

//creating an instance of express
var app = express();

//serve static with express (css files, images,scripts etc)
app.use(express.static("public"));
//body as json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars set up
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//route import for server
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });