const mongooseHelper = require('./../helpers/mongoose.helper')
const mongoose = mongooseHelper.getConnecton()


const bookSchema = new mongoose.Schema({


    title: { type: String },
    author: { type: String },
    edition: { type: String },
    language: { type: String },
    numberOfPages: { type: Number },
    publishedYear: { type: Number },
    rackNumber: { type: Number ,required:true},
    slotNumber: { type: Number, required: true },
    numberOfCoppies: { type: Number },
    bookStatus: { type: String },
    bookCondition: { type: String },
    bookImages: { type: String },
    userId:{type:String,required:true},
    collegeId:{type:String,required:true},
    courseId:{type:String, required:true},
    classId : {type:String,required:true}





})


const BookModel = mongoose.model('BookModel', bookSchema, "Book Registration")


module.exports = {
    BookModel
}