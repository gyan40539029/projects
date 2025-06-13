const mongooseHeper = require('./../helpers/mongoose.helper')
const mongoose = mongooseHeper.getConnecton()

const addressSchema = new mongoose.Schema({
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: Number },
    country: { type: String }

}, { _id: false })


const collegeSchema = new mongoose.Schema({
    collegeName: { type: String },
    collegeCode: { type: Number },
    email: { type: String },
    phone: { type: Number },
    website: { type: String },
    establishmentYear: { type: Number },
    collegeLogo: { type: String },
    address : addressSchema,
    userId : {type:String ,required: true}
})


const CollegeModel = mongoose.model("CollegeModel", collegeSchema, "College Registration Form")


module.exports = {
    CollegeModel
}
