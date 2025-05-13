const express = require('express')
const body_parser = require('body-parser')
const app = express()
const portNumber  = 3000
const router = require('./routes/index.router')

app.use(body_parser.json())
app.use(body_parser.urlencoded())
const serverConnection = (portNumber,()=>{
    console.log('this is response from server')
})
app.use('/',router)



app.listen(portNumber,serverConnection)








