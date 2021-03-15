const express = require('express');
const  routes  = require('./routers');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/project',{
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', routes.users);
app.use('/auth', routes.auth);
app.use('/boards', routes.boards);

const PORT = process.env.PORT || 3000;
app.listen(3000, () =>{
  console.log(`server on http://localhost:${PORT}`);
})

console.log(`Server running at ${PORT}`);