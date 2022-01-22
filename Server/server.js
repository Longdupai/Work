const express = require("express");
const app = express();
// app.use(cors(corsOptions));

app.listen(8000, () => {
  console.log("Server started!");
});

const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.route("/api/items").get((req, res) => {
  console.log("items");
  res.send([
    { name: "lilly", id: "id1" },
    { name: "Oscar", id: "id2" },
  ]);
});

app.delete("/api/delete/:id", (req, res) => {
  console.log("delete param 2:", req.params);
  res.status(201).send(req.params);
});
