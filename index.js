import express from "express"; // import the express module
import dotenv from "dotenv"; // import the dotenv module
import { axiosGet, axiosPost } from "./helpers/axiosWrapper.js";
import * as path from "path";
import * as url from "url";
import favicon from "serve-favicon";
import validateQuery from "./helpers/validateQuery.js";
import constructApiCall from "./helpers/constructApiCall.js";

import sheetdb from 'sheetdb-node';

dotenv.config(); // initialize dotenv

var config = {
  address: process.env.API_ID,
};

// Create new client
var sheetdbClient = sheetdb(config);

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


const app = express(); // create an express app

app.use(favicon(path.join(__dirname, 'public/assets/images', 'fried-rice.ico')))

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static(path.resolve("public")));

const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
  // const url = process.env.API_URL; // get the api url from the .env file
  
  res.render("name", {  }); // render the name.ejs file
}
);

app.get("/options", (req, res) => {
  // const url = process.env.API_URL; // get the api url from the .env file
  if (!validateQuery("options", req.query)) {
    res.redirect("/");
  };
  const name = req.query.name;
  res.render("options", { name: name }); // render the options.ejs file
}
);

app.get("/guests", (req, res) => {
  // const url = process.env.API_URL; // get the api url from the .env file
  if (!validateQuery("guests", req.query)) {
    res.redirect("/");
  };
  const data = req.query;
  res.render("guests", data); // render the options.ejs file
}
);

app.get("/confirmation", (req, res) => {
  // const url = process.env.API_URL; // get the api url from the .env file
  if (!validateQuery("confirmation", req.query)) {
    res.redirect("/");
  };
  const data = req.query;
  res.render("confirmation", data); // render the options.ejs file
}
);

app.get("/finish", (req, res) => {

  if (!validateQuery("finish", req.query)) {
    res.redirect("/");
  };

  const payload = constructApiCall(req.query);

  sheetdbClient.create(payload, "Testsheet").then(function(data) {
    console.log(data);
    res.redirect("/");
  }, function(err){
    console.log(err);
    res.redirect("/");
  });


});

app.listen(port, () => { // starting the server and listening on port 3000
  console.log("Server is running on port 3000");
});