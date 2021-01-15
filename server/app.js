const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const jsonBody = require('./Out.json')

app.use(cors())

const fs = require('fs');

app.get('/', (req, res) => {
  res.send(jsonBody)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})