const mongooseHeper = require('../helpers/mongoose.helper')
const mongoose = mongooseHeper.getConnecton()

const classSchema = new mongoose.Schema({

    classId: { type: "Number" },
    className: { type: "string" },
    section: { type: "string" },
    startDate: { type: "Number" },
    endDate: { type: "Number" },
    classTeacher: { type: "string" },
    status: { type: "string" }


})


const classModel = mongoose.model('classModel', classSchema, "Classes Registration Form")


module.exports = {
    classModel
}