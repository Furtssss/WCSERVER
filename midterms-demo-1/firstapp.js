/*Activity Name: firstexpress.js
  Author Name: Furton, Mark Lemuel B.
  Section and Code: WD-202 / 2083
*/

var express = require("Express");

var app = express();

app.get("/", function (request, response) {
  response.send("Hello Word! -Furts");
});

app.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});
