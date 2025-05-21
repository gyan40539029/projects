const mongooseHeper = require('./../helpers/mongoose.helper')

const mongoose = mongooseHeper.getConnecton()

const courseSchema = new mongoose.Schema({


    courseName: { type: "string" },
    courseType: { type: "string" },
    program: { type: "string" },
    duration: { type: "Number" },
    status: { type: "string" },
    startDate: { type: "Number" },
    endDate: { type: "Number" },

})


const courseModel = mongoose.model('courseModel', courseSchema, "Courses Registration Form")


module.exports = {
    courseModel
}