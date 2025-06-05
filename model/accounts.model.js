const mongooseHelper = require('./../helpers/mongoose.helper')
const mongoose = mongooseHelper.getConnecton()


const accountSchema = new mongoose.Schema({


    transactionType: { type: String },
    transactionDate: { type: Number },
    accountName: { type: String },
    amount: { type: Number },
    currency: { type: String },
    paymentMethod: { type: String },
    transactionMode: { type: String },
    invoiceId: { type: Number }



})



const AccountModel = mongoose.model('accountModel', accountSchema, "Account Registration")



module.exports = {
    AccountModel
}