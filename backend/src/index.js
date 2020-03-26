const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

const URL = 'localhost'
const PORT = 3333
const HOST = '0.0.0.0'

app.use(cors({
  origin: URL
}))
app.use(express.json())
app.use(routes)

app.listen(PORT, HOST)
console.log('Running on ' + HOST + ':' + PORT)
