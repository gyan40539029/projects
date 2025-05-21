const mongooseHelper = require('./../helpers/mongoose.helper')
const mongoose = mongooseHelper.getConnecton()


const bookSchema = new mongoose.Schema({

    bookId: { type: "Number" },
    title: { type: "string" },
    author: { type: "string" },
    edition: { type: "string" },
    language: { type: "string" },
    numberOfPages: { type: "Number" },
    publishedYear: { type: "Number" },
    rackNumber: { type: "Number" },
    numberOfCoppies: { type: "Number" },
    price: { type: "Number" },
    bookStatus: { type: "string" },
    bookCondition: { type: "string" },
    bookImages: { type: "string" }





})


const bookModel = mongoose.model('bookModel', bookSchema, "Book Registration")


module.exports = {
    bookModel
}