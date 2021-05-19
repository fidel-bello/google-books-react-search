const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");

require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  //yarn build
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://fidel-bello:Password123!@cluster0.god7f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  // server
  console.log(`API server now on port ${PORT}!`);
});

//console.log(mongoose)