
const { BookModel } = require('./../model/books.model')

const createBook = async (book) => {

    try {

        return await BookModel.insertOne(book)

    } catch (error) {
        throw new Error(error.message)
    }
}


const getBookById = async (_id) => {
    try {
        const book = await BookModel.findOne({ _id })
        return book
    } catch (error) {
        throw new Error(error.message)
    }

}


const getBooks = async () => {
    try {
        const book = await BookModel.find()

        return book


    } catch (err) {
        throw new Error(err.message)
    }
}





const updateBookById = async(book, _id) => {
    try {

        const updateBook = await BookModel.updateOne({ _id },
            { $set: book },
            { upsert: false }
        )
        return updateBook


    } catch (error) {
        throw new Error(error.message)
    }

}


const updateBooks = async(book) => {
    try {

        const booksUpdate = await BookModel.updateMany(
            // { _id },
            { $set: book },
            { upsert: false }
        )
        return booksUpdate


    } catch (error) {
        throw new Error(error.message)
    }

}

const deleteBookById = async(_id)=>{
    try{
    const deleteBook  = await BookModel.deleteOne({_id})

    return deleteBook


    }catch(err){
        throw new Error(err.message)
    }
}

const deleteBooks = async()=>{
    try{
    const booksDelete = await BookModel.deleteMany()
    return booksDelete

    }catch(err){
        throw new Error(err.message)
    }
}



module.exports = {
    createBook,
    getBookById,
    getBooks,
    updateBookById,
    updateBooks,
    deleteBookById,
    deleteBooks
}


