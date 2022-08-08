require('dotenv').config();
const express = require('express');
const mongosee = require('mongoose');
const cors = require('cors')
const app = express();
const apiRoutes = require('./src/modules/routes/router.js');
const {
    URL,
    PORT
} = require('./config')

app.use(cors());
app.use(express.json());
app.use('/', apiRoutes);

const connect = () => {
mongosee.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  });
  
}

connect()