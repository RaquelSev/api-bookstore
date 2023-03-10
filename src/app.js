import express from "express";
import db from "./config/dbConnect.js";
import books from "./models/Book.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json());

routes(app);


app.delete('/books/:id', (req, res) => {
    let {id} = req.params;
    let index = findBook(id);
    books.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);
})

export default app;
