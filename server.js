const express = require('express');
const path = require('path');
const routes = require('./routes');
const connectDB = require('./config/db');
require('dotenv').config();

const PORT = process.env.PORT ||3001;
const app = express();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '/client/build')));
}

app.use(routes);

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
//Procfile