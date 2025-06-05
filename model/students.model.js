const mongooseHelper = require('./../helpers/mongoose.helper')
const mongoose = mongooseHelper.getConnecton()

const studentSchema = new mongoose.Schema({

    fullName: { type: String },
    studentId: { type: Number },
    emailAddress: { type: String },
    phoneNumber: { type: Number },
    password: { type: String },
    confirmPassword: { type: String },
    smsAuthentication: { type: Number },
    profilePicture: { type: String },
    DOB: { type: Number },
    gender: { type: String },
    addresss: {
        type: Object,
        street: { type: String },
        city: { type: String },
        zip: { type: Number },
        country: { type: String }
    }

})


const StudentModel = mongoose.model('studentModel', studentSchema, "Student Registration")



module.exports = {
    StudentModel
}