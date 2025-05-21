const mongooseHelper = require('./../helpers/mongoose.helper')
const mongoose = mongooseHelper.getConnecton()

const trainerSchema = new mongoose.Schema({

    trainerId: { type: "Number" },
    fullName: { type: "string" },
    emailAddress: { type: "string" },
    phoneNumber: { type: "Number" },
    gender: { type: "string" },
    Dob: { type: "Number" },
    profilePhoto: { type: "string" },
    qualification: { type: "string" },
    expertise: { type: "string" },
    experiance: { type: "Number" },
    address: {
        type: Object,
        street: { type: "string" },
        city: { type: "string" },
        State: { type: "string" },
        zipCode: { type: "Number" },
        trainerType: { type: "string" },
        Status: { type: "string" }
    }

})



const trainerModel = mongoose.model('trainerModel', trainerSchema, "Trainer Registration")

module.exports = {
    trainerModel
}