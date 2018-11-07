const express  = require('express')
const mongoose = require('mongoose')
const routes   = require('./routes')
const cors     = require('cors')

const app = express()

const server = require('http').Server(app)
const io     = require('socket.io')(server)

const port   = 9999

mongoose.connect("mongodb://goweek:goweek123@ds253713.mlab.com:53713/dctb-goweek", {
    useNewUrlParser : true
})

app.use(cors({ origin: true }));
app.use((req, res, next) => {
    req.io = io
    return next()
})
app.use(express.json())
app.use(routes)

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
})