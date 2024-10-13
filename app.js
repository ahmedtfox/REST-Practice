const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const feedRouts = require("./routes/feed");

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow any domain to access the API
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  ); // Allow these HTTP methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allow specific headers (e.g., Content-Type and Authorization)
  next();
});

app.use("/feed", feedRouts);

app.listen(8080);
