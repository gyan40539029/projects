const mongooseHelper = require('./../helpers/mongoose.helper')
const mongoose = mongooseHelper.getConnecton()


const accountSchema = new mongoose.Schema({


    transactionType: { type: String, required: true },
    transactionDate: { type: Date, required: true },
    accountName: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String },
    invoiceId: { type: Number }



})



const AccountModel = mongoose.model('AccountModel', accountSchema, "Account Registration")



module.exports = {
    AccountModel
}