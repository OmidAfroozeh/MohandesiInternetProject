const db = require("./mongodb")
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
 

app.use(cors());
app.use(bodyParser.json());


app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});


app.get("/", async (req, res) => {
  let array;
  await db.read().then((res) => (array = res));
  res.send({
    list: array,
  });
  
});

app.get("/getData", async (req, res) => {
  let array;
  let {search} = req.query
  await db.getDataQuery().then((res) => (array = res));
  res.send({
    list: array,
  });
  
});


app.post("/", async (req, res) => {
  let result;
  await db.insert(req.body).then((res) => (result = res));
  res.send({
    result,
  });
});



  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));