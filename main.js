const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const body_parser = require('body-parser')
const app = express()

const portNumber  = process.env.PORT
console.log(portNumber)
const router = require('./routes/index.router')

app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))


const serverConnection = (portNumber,()=>{
    console.log('this is response from server')
})
app.use('/',router)



app.listen(portNumber,serverConnection)








