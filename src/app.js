const express = require('express');
const {MONGO_CONNECTION_STRING, PORT} = require('./key')
const router  = require('./router');
const mongoose = require('mongoose')
const cors = require('cors');

mongoose.connect(MONGO_CONNECTION_STRING,{
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())

app.use(router);

app.listen(3000, () =>{
  console.log(`server on http://localhost:${PORT}`);
})