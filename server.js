const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const fs = require("fs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));


// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  response.sendFile(`${__dirname}/public/index.html`);
});



app.get('/hoi', (req, res) => {
  console.log(`params = ${JSON.stringify(req.query)}`);
  if (typeof req.query.text !== "undefined") {
    console.log(`text = ${req.query.text}`);
    res.send(`${sanitize(req.query.text)}`);
  } else {
    res.send("Please specify text parameter");
  }
});



function sanitize(input) {
  result = input.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;').replace("'", '&#x27;').replace('/', '&#x2F;');
  console.log(`sanitizing input ${input} to ${result}`);
  return result;
}


// listen for requests :)
var listener = app.listen(80, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
