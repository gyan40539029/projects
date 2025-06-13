const mongooseHelper = require('../helpers/mongoose.helper')
const mongoose = mongooseHelper.getConnecton()

const studentSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    collegeId: { type: String, required: true },
    timeStamp: { type: Date, required: true },
    courseId: { type: String, required: true }
})
const StudentModel = mongoose.model('StudentModel', studentSchema, "Student Registration")

module.exports = {
    StudentModel
}