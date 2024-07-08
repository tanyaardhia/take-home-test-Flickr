require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Controller = require('./controllers/controller');
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", Controller.home)
app.get("/photoFlickr", Controller.getViewers)
app.get("/searchImage", Controller.searchingImages)

app.listen(port, () => {
  console.log(`take home test ${port}`)
})
