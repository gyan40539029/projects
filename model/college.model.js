const mongooseHeper = require('./../helpers/mongoose.helper')

const mongoose = mongooseHeper.getConnecton()


const collegeSchema = new mongoose.Schema({
    collegeName: { type: "string" },
    collegeCode: { type: "Number" },
    Email: { type: "string" },
    Phone: { type: "Number" },
    Website: { type: "string" },

    Address: {
        type: Object,
        Street: { type: "string" },
        City: { type: "string" },
        State: { type: "string" },
        Zip: { type: "Number" },
        Country: { type: "string" }
    },

    establishmentYear: { type: "Number" },
    collegeLogo: { type: "string" }
})


const collegeModel = mongoose.model("collegeModel", collegeSchema, "College Registration Form")


module.exports = {
    collegeModel
}
