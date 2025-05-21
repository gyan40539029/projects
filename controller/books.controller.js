
const bookHelper = require('../helpers/books.helpers')
const createBook = async(req, res) => {
    try {
        const book = req.body
        
        if (book?.bookId) {

            const book_rcd = await bookHelper.createBook(book)

            if (book_rcd === "book not created") {
                return res.status(401).json({
                    status: "already exhisting book on this id",
                    result: book_rcd

                })

            }

            else {

                return res.status(201).json({
                    status: "new book added successfully",
                    result: book_rcd

                })

            }

        }
        else {
            return res.status(404).json({
                status: "error",
                desc: "please enter the book id"
            })
        }
    }
    catch (err) {
        console.log("internal error", err, err.message);


        return res.status(501).json({
            status: "internal error",
            result: err.message,



        })


    }

}

const getBookById = async(req, res) => {
    try {
        const bookId = req.params.bookId //// need to  change query to param
         console.log(bookId)
        const bookRecord = await bookHelper.getBookById(bookId)
       
       
        if (bookId > 0) {
          
            
            if (bookRecord === "book data not fetch") {
                return res.status(401).json({
                    status: "error",
                    result: bookRecord
                })
            }
            else {
                return res.status(201).json({
                    status: "data fetch successfully",
                    result: bookRecord
                })
            }
        } else {
            console.log('hellow brother')
            return res.status(501).json({
                status: "missing field input",
                remdy: "please enter the bookId"
            })
        }
    } catch (err) {
        console.log(err,err.message)
        return res.status(500).json({
            error: "internal error",
            result: err.message
        })
    }

}

const getBooks = (req, res) => {                     /// daat come in query

}

const updateBookById = (req, res) => {   /// update college by id  need to change  and neet to param for id
    try{
    const bookData = req.body
    const bookId = req.params.bookId
   

    if ((bookData && Object.keys(bookData).length > 0) && bookId > 0) {
        const data = bookHelper.updateBookById(bookData,bookId)

        if (data == "book data successfully updated") {
           return  res.status(201).json({
                status: "book data update successfully",
                result: bookData
            })

        }
        else {
           return res.status(401).json({
                status: "book data not updated"
            })
        }
    }

    else {
         console.log('hellow')
      return  res.status(401).json({
            status: "book data empty or bookId empty",
            remdy : "check the book data or bookId"
           
        })
    }

}catch(err){
    console.log(err,err.message)
    return res.status(505).json({
        error : "internal error",
        desc : err.message

    })
}
}


const updateBooks = (req, res) => {

}


const deleteBookById = (req,res)=>{

}


const deleteBooks = (req,res)=>{

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