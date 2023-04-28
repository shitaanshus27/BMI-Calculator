const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function (request, response) {
  var number1 = Number(request.body.num1);
  var number2 = Number(request.body.num2);
  var result = number1 / number2 ** 2;
  response.send(`<b>BMI</b>` + "  " + result);
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});
