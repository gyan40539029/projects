const mongooseHelper = require('./../helpers/mongoose.helper')
const mongoose = mongooseHelper.getConnecton()


const userSchema = new mongoose.Schema({

    fullName: { type: String },
    userId: { type: String },
    userName: { type: String },
    emailAddress: { type: String },
    phoneNumber: { type: Number },
    password: { type: String },
    confirmPassword: { type: String },
    smsAuthentication: { type: Number },
    profilePicture: { type: String },
    DOB: { type: Number },
    gender: { type: String },
    RoleAccessLevel: { type: String },
    Status: { type: String },
    department: { type: String }



})



const UserModel = mongoose.model('userModel', userSchema, "User Registration")

module.exports = {
    UserModel
}