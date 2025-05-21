const mongoose = require('mongoose')

const mongooseConnection = async ()=>{
    const connectionString = "mongodb+srv://gyan:9873251643@appdatabase.sfplrpa.mongodb.net/gyan?retryWrites=true&w=majority&appName=appDatabase"
    await mongoose.connect(connectionString)
}

mongooseConnection()
.then(()=>{
    console.log("connection has been esteblished")
})
.catch((err)=>{
    console.log("connection failed",err.message)
})


const getConnecton  = ()=>{
    return mongoose
}

module.exports = {
    mongooseConnection,
    getConnecton

}