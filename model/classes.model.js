const mongooseHeper = require('../helpers/mongoose.helper')
const mongoose = mongooseHeper.getConnecton()

const classSchema = new mongoose.Schema({

    classId: { type: Number },
    className: { type: String },
    section: { type: String },
    startDate: { type: Number },
    endDate: { type: Number },
    classTeacher: { type: String },
    status: { type: String }


})


const ClassModel = mongoose.model('classModel', classSchema, "Classes Registration Form")


module.exports = {
    ClassModel
}