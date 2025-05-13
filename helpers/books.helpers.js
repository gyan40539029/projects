let bookList = []

const createBook = (book)=>{  

    try{
if(book.bookId && !bookList.some(bk=>bk.bookId== book.bookId)){
    console.log('hellow')
    bookList.push(book)

    
    return book

}


else{
    return "book not created"
}
}catch(error){
    throw new Error(error.message)
}
}


const getBookById = (bookId)=>{   
    try{
   if(bookId){
    const idBook = parseInt(bookId)
   
    let book = bookList.find((bk)=>bk.bookId === idBook )
    

    
    if(book){
        
        return book

    }

    else{
        return "book data not fetch"
    }

   }

}catch(error){
    throw new Error(error.message)
}

}


const getBooks = (book)=>{



   }





const updateBookById = (book,bookId)=>{
    try{
    if(book?.bookId && bookId){
        console.log('hellooooooo')

        bookList = bookList.map((bk)=>{
            if(bk.bookId == bookId){
                return {
                    ...book,
                     bookId : bk.bookId
                }
                
            }
            return bk
    
           
        })

        return "book data successfully updated"
    


    }
    else{
        return "book data not updated"
    }

}catch(error){
    throw new Error(error.message)
}
    
}


module.exports={
createBook,
getBookById,
getBooks,
updateBookById
}


