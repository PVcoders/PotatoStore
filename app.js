const express = require('express');
const app = express();
const dir = __dirname

app.use(express.static("public"))

app.get("/", function(req, res){
  res.sendFile(dir + "/index.html")
})














app.listen(3000, function(){
  console.log("Teaching is math in universe 3000.");
})
