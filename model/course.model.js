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
    userId : {type:String, required:true},
    collegeId:{type:String, required :true},
    classId:{type:String, required:true}

})


const CourseModel = mongoose.model('CourseModel', courseSchema, "Courses Registration Form")


module.exports = {
    CourseModel
}