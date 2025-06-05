const mongooseHelper = require('./../helpers/mongoose.helper')
const mongoose = mongooseHelper.getConnecton()


const bookSchema = new mongoose.Schema({

    bookId: { type: Number },
    title: { type: String },
    author: { type: String },
    edition: { type: String },
    language: { type: String },
    numberOfPages: { type: Number },
    publishedYear: { type: Number },
    rackNumber: { type: Number },
    numberOfCoppies: { type: Number },
    price: { type: Number },
    bookStatus: { type: String },
    bookCondition: { type: String },
    bookImages: { type: String }





})


const BookModel = mongoose.model('bookModel', bookSchema, "Book Registration")


module.exports = {
    BookModel
}