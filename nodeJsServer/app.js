const express = require('express');
const bodyParser = require('body-parser');
const { routes } = require('./routers');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/project',{
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.forEach((item) => {
  app.use(`/${item}`, require(`./routers/${item}`));
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () =>{
  console.log(`server on http://localhost:${PORT}`);
})

console.log(`Server running at ${PORT}`);
