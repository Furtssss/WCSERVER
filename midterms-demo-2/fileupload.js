var express = require("express");
var multer = require("multer");

var app = express();

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploaded");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

var uploads = multer({ storage: storage }).single("myfile");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/indexfileupload.html");
});

app.post("/uploaded", function (req, res) {
  uploads(req, res, function (err) {
    if (err) {
      return res.end("Error uploading file");
    }
    res.end("File is uploaded successfully!");
  });
});

app.listen(200, function () {
  console.log("Server is running on port 200");
});
