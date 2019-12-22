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
  res.sendFile(`${__dirname}/index.html`);
});

// app.get("/style.css", (req, res) => {
//   res.sendFile(`${__dirname}/style.css`);
// });

// app.get("/client.js", (req, res) => {
//   res.sendFile(`${__dirname}/client.js`);
// });

app.use(express.static('/public'))


app.get('/hoi', (req, res) => {
  console.log(`params = ${JSON.stringify(req.query)}`);
  if (typeof req.query.text !== "undefined") {
    let d = new Date();
    let time = [d.getHours(), d.getMinutes(), d.getSeconds()];

    for (i = 0; i < time.length; i++) {
      time[i] = ((time[i].toString().length === 2) ? '' : '0') + time[i];
    }

    console.log(`time = ${JSON.stringify(time)}`)
    res.send(JSON.stringify({
      "name": sanitize(req.query.text),
      "time": time.join(':')
    }));
  }
  else {
    res.statusCode = 422;
    res.send("Please specify text GET parameter");
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
