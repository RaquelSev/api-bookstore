import books from "../models/Book.js";

class BookController {
    
    static listBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books)
        })
    }

    static registeredBook = (req, res) => 
    {
        let book = new books(req.body);
        book.save((err) => {
            if(err) {
                res.status(500).send({message: `${err} - Book not resgistered`})
            } else {
                res.status(201).send(book.toJSON());
            }
        })
    }
}

export default BookController;