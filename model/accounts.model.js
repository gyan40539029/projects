const mongooseHelper = require('./../helpers/mongoose.helper')
const mongoose = mongooseHelper.getConnecton()


const accountSchema = new mongoose.Schema({


    transactionType: { type: "string" },
    transactionDate: { type: "Number" },
    accountName: { type: "string" },
    amount: { type: "Number" },
    currency: { type: "string" },
    paymentMethod: { type: "string" },
    transactionMode: { type: "string" },
    InvoiceId: { type: "Number" }



})



const accountModel = mongoose.model('accountModel', accountSchema, "Account Registration")



module.exports = {
    accountModel
}