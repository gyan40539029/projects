const mongooseHeper = require('./../helpers/mongoose.helper')

const mongoose = mongooseHeper.getConnecton()

const courseSchema = new mongoose.Schema({


    courseName: { type: String },
    courseType: { type: String },
    program: { type: String },
    duration: { type: Number },
    status: { type: String },
    startDate: { type: Number },
    endDate: { type: Number },

})


const CourseModel = mongoose.model('courseModel', courseSchema, "Courses Registration Form")


module.exports = {
    CourseModel
}