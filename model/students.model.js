const mongooseHelper = require('./../helpers/mongoose.helper')
const mongoose = mongooseHelper.getConnecton()

const studentSchema = new mongoose.Schema({

    fullName: { type: "string" },
    studentId: { type: "Number" },
    emailAddress: { type: "string" },
    phoneNumber: { type: "Number" },
    password: { type: "string" },
    confirmPassword: { type: "string" },
    smsAuthentication: { type: "Number" },
    profilePicture: { type: "string" },
    DOB: { type: "Number" },
    gender: { type: "string" },
    addresss: {
        type: Object,
        street: { type: "string" },
        city: { type: "string" },
        zip: { type: "Number" },
        country: { type: "string" }
    }

})


const studentModel = mongoose.model('studentModel', studentSchema, "Student Registration")



module.exports = {
    studentModel
}