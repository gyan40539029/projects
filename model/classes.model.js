const mongooseHeper = require('../helpers/mongoose.helper')
const mongoose = mongooseHeper.getConnecton()

const classSchema = new mongoose.Schema({

    className: { type: String },
    section: { type: String },
    startDate: { type: Number },
    endDate: { type: Number },
    classTeacher: { type: String },
    status: { type: String },
    userId :{type:String, required:true},
    collegeId : {type:String, required:true}


})


const ClassModel = mongoose.model('ClassModel', classSchema, "Classes Registration Form")


module.exports = {
    ClassModel
}