const express = require('express')
const app = express()
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')

const api = require('./server/routes/api')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// points static path to dist
app.use(express.static(path.join(__dirname, '/client/dist')))

app.use('/api', api)

// Catch all other routes and return the index file
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

const port = process.env.PORT || '3000'
app.set('port', port)

const server = http.createServer(app)

server.listen(port, () => console.log(`API running on localhost:${port}`))
