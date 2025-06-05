const mongooseHelper = require('./../helpers/mongoose.helper')
const mongoose = mongooseHelper.getConnecton()

const trainerSchema = new mongoose.Schema({

    trainerId: { type: Number },
    fullName: { type: String },
    emailAddress: { type: String },
    phoneNumber: { type: Number },
    gender: { type: String },
    Dob: { type: Number },
    profilePhoto: { type: String },
    qualification: { type: String },
    expertise: { type: String },
    experiance: { type: Number },
    address: {
        type: Object,
        street: { type: String },
        city: { type: String },
        State: { type: String },
        zipCode: { type: Number },
        trainerType: { type: String },
        Status: { type: String }
    }

})



const TrainerModel = mongoose.model('trainerModel', trainerSchema, "Trainer Registration")

module.exports = {
    TrainerModel
}