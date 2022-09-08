const mongoose = require('mongoose')
const express = require('express')

const app = express()
const port = 3000

app.use(express.json());
app.use(require('./routes/students.route.js'))

mongoose.connect("mongodb+srv://skeletor:akhmed20020918@cluster0.bcycud5.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

  app.listen(port, () => {
    console.log('Сервер запущен успешно http://localhost:3000')
  })