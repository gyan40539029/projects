const mongooseHeper = require('./../helpers/mongoose.helper')

const mongoose = mongooseHeper.getConnecton()


const collegeSchema = new mongoose.Schema({
    collegeName: { type: String },
    collegeCode: { type: Number },
    Email: { type: String },
    Phone: { type: Number },
    Website: { type: String },

    Address: {
        type: Object,
        Street: { type: String },
        City: { type: String },
        State: { type: String },
        Zip: { type: Number },
        Country: { type: String }
    },

    establishmentYear: { type: Number },
    collegeLogo: { type: String }
})


const CollegeModel = mongoose.model("collegeModel", collegeSchema, "College Registration Form")


module.exports = {
    CollegeModel
}
