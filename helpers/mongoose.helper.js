const mongoose = require('mongoose')

const mongooseConnection = async ()=>{   /// use try and catch for error handeling
    
    const connectionString = process.env.MONGOURL
    await mongoose.connect(connectionString,{dbName:"Accounts"})// control+space
}

mongooseConnection()



const getConnecton  = ()=>{
    return mongoose
}

module.exports = {
    mongooseConnection,
    getConnecton

}