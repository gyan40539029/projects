
const bookHelper = require('../helpers/books.helpers')
const createBook = async (req, res) => {
    try {
        const book = req.body
        const book_rcd = await bookHelper.createBook(book)
        console.log(book_rcd)

        return res.status(201).json({
            status:"book added successfully",
            result :book_rcd
        })




    } catch (err) {
        console.log("internal error", err, err.message);


        return res.status(501).json({
            status: "internal error",
            result: err.message,



        })


    }
}



const getBookById = async (req, res) => {
    try {
        const bookId = req.params._id 
        console.log(bookId)
        const bookRecord = await bookHelper.getBookById(bookId)
        console.log(bookRecord)

        return res.status(201).json({
            status : "book data successfully fetched",
            result : bookRecord
        })


        
    } catch (err) {
        console.log(err, err.message)
        return res.status(500).json({
            error: "internal error",
            result: err.message
        })
    }

}

const getBooks = async(req, res) => {   //data come in query
    try{
    
    const booksGet = await bookHelper.getBooks()
    console.log(booksGet)

    return res.status(201).json({
        status : "all books data fetched successfully",
        result : booksGet
    })
}catch(err){
    console.log(err, err.message)

    return res.status(501).json({
        status : "internal error",
        result : err.message
})
}

}

const updateBookById = async(req, res) => {   
    try {
        const bookData = req.body
        const bookId = req.params._id

        const updateBook = await bookHelper.updateBookById(bookData,bookId)
        console.log(updateBook)

        return res.status(201).json({
            status :"book data successfully updated",
            result : updateBook
        })




        
    } catch (err) {
        console.log(err, err.message)
        return res.status(505).json({
            error: "internal error",
            desc: err.message

        })
    }
}


const updateBooks = async(req, res) => {

    try{

        const books = req.body

        const booksUpdate = await bookHelper.updateBooks(books)
        console.log(booksUpdate)
        return res.status(201).json({
            status:"All books data update successfully",
            result : booksUpdate
        })


    } catch(err){
        console.log(err, err.message)
        return res.status(403).json({
            status : "internal error",
            result : err.message
        })
    }

}


const deleteBookById = async(req, res) => {

    try{

    const bookId = req.params._id

    const deleteBook = await bookHelper.deleteBookById(bookId)
    console.log(deleteBook)
    return res.status(201).json({
        status : "book deleted  successfully"
    })
}catch(err){
    console.log(err,err.message)
    return res.status(403).json({
        status:"internal error",
        result : err.message
    })
}

}


const deleteBooks = async(req, res) => {
    try{

    const booksDelete = await bookHelper.deleteBooks()

    console.log(booksDelete)
    return res.status(201).json({
        status:"all book deleted successfully",
        result :booksDelete
    })

}catch(err){
    console.log(err,err.message)
    return res.status(501).json({
        status : "internal error",
        result : err.message
    })
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