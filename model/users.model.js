const mongooseHelper = require('./../helpers/mongoose.helper')
const mongoose = mongooseHelper.getConnecton()

const addressSchema = new mongoose.Schema({
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: Number },
    country: { type: String },

}, { _id: false })


const userSchema = new mongoose.Schema({

    fullName: { type: String },
    userName: { type: String },
    emailAddress: { type: String },
    phoneNumber: { type: Number },
    password: { type: String },   // md5 encryption
    profilePicture: { type: String },
    dob: { type: Number },
    gender: { type: String },
    roleAccessLevel: { type: String },
    type: { type: String },
    status: { type: String },  /// trainer / admin / student
    department: { type: String },
    address: addressSchema



})



const UserModel = mongoose.model('UserModel', userSchema, "User Registration")

module.exports = {
    UserModel
}