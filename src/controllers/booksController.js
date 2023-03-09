import livros from "../models/Book.js";

class BookController {
    
    static listBooks = (req, res) => {
        livros.find((err, books) => {
            res.status(200).json(books)
        })
    }
}

export default BookController;