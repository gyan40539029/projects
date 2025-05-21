const mongooseHelper = require('./../helpers/mongoose.helper')
const mongoose = mongooseHelper.getConnecton()


const userSchema = new mongoose.Schema({

    fullName: { type: "string" },
    userId: { type: "string" },
    userName: { type: "string" },
    emailAddress: { type: "string" },
    phoneNumber: { type: "Number" },
    password: { type: "string" },
    confirmPassword: { type: "string" },
    smsAuthentication: { type: "Number" },
    profilePicture: { type: "string" },
    DOB: { type: "Number" },
    gender: { type: "string" },
    RoleAccessLevel: { type: "string" },
    Status: { type: "string" },
    department: { type: "string" }



})



const userModel = mongoose.model('userModel', userSchema, "User Registration")

module.exports = {
    userModel
}