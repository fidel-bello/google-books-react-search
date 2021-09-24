const express = require('express');
const path = require('path');
const routes = require('./routes');
const connectDB = require('./config/db');
require('dotenv').config();


connectDB();
const app = express();

app.use(routes);
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use( express.static('/client/build'));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const PORT = process.env.PORT ||5000;

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});



//testing
