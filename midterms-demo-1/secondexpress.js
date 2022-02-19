/* Activity Name: secondexpress.js
Author Name: Furton, Mark Lemuel B.
Section and Code: WD-202 / 2083
*/

var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("You have successfully created second app!");
});
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http:/1%s: %s", host, port);
});
