let bookList = []

const { bookModel } = require('./../model/books.model')

const createBook = async (book) => {

    try {
        if (book.bookId && !bookList.some(bk => bk.bookId == book.bookId)) {
            await bookModel.insertOne({

                bookId: 114,
                title: "hty",
                author: "ntpc",
                edition: "English",
                language: "lmt",
                numberOfPages: 412,
                publishedYear: 2010,
                rackNumber: 420,
                numberOfCoppies: 50,
                price:2020,
                bookStatus: "Avaliable",
                bookCondition: "good",
                bookImages: "url"




            })
            console.log('hellow')
            bookList.push(book)


            return book

        }


        else {
            return "book not created"
        }
    } catch (error) {
        throw new Error(error.message)
    }
}


const getBookById = async(bookId) => {
    try {
        if (bookId) {
            const idBook = parseInt(bookId)

            await bookModel.findOne({_id:"4550050"})

            let book = bookList.find((bk) => bk.bookId === idBook)



            if (book) {

                return book

            }

            else {
                return "book data not fetch"
            }

        }

    } catch (error) {
        throw new Error(error.message)
    }

}


const getBooks = (book) => {



}





const updateBookById = (book, bookId) => {
    try {
        if (book?.bookId && bookId) {
            console.log('hellooooooo')

            bookList = bookList.map((bk) => {
                if (bk.bookId == bookId) {
                    return {
                        ...book,
                        bookId: bk.bookId
                    }

                }
                return bk


            })

            return "book data successfully updated"



        }
        else {
            return "book data not updated"
        }

    } catch (error) {
        throw new Error(error.message)
    }

}


module.exports = {
    createBook,
    getBookById,
    getBooks,
    updateBookById
}


