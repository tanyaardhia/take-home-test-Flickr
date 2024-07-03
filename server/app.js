const express = require('express');
const Controller = require('./controllers/controller');
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", Controller.home)
app.get("/photoFlickr", Controller.getViewers)

app.listen(port, () => {
  console.log(`take home test ${port}`)
})