import express from "express"; // import the express module
import dotenv from "dotenv"; // import the dotenv module
import { axiosGet, axiosPost } from "./helpers/axiosWrapper.js";
import * as path from "path";
import * as url from "url";
import favicon from "serve-favicon";

import sheetdb from 'sheetdb-node';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

dotenv.config(); // initialize dotenv

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
  const name = req.query.name;
  res.render("options", { name: name }); // render the name.ejs file
}
);

app.listen(port, () => { // starting the server and listening on port 3000
  console.log("Server is running on port 3000");
});