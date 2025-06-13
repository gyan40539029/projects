const mongooseHelper = require('./../helpers/mongoose.helper')
const mongoose = mongooseHelper.getConnecton()

const addressSchema = new mongoose.Schema({
    street: { type: String },
    city: { type: String },
    State: { type: String },
    zipCode: { type: Number },
    trainerType: { type: String },
    Status: { type: String }

}, { _id: false })

const trainerSchema = new mongoose.Schema({

    fullName: { type: String },
    emailAddress: { type: String },
    phoneNumber: { type: Number },
    gender: { type: String },
    Dob: { type: Number },
    profilePhoto: { type: String },
    qualification: { type: String },
    expertise: { type: String },
    experiance: { type: Number },
    address: addressSchema,
    userId: { type: String, required: true },
    collegeId:{type:String, required:true},
    classId:{type:String,required:true},
    courseId:{type:String , required:true}

})



const TrainerModel = mongoose.model('TrainerModel', trainerSchema, "Trainer Registration")

module.exports = {
    TrainerModel
}