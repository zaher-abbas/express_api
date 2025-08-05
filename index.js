import express from 'express';

const app = express();

/*
 En activant le middleware express.json(), on
dit à Express :
 "À chaque requête, si le corps contient du
JSON, lis-le et transforme-le en objet JS
accessible via req.body."
 */
app.use(express.json());

const listenPort = 3000;

app.listen(listenPort, () => {
    console.log(`Server listening on port ${listenPort}`);
});

// we have also post, put, and delete requests
const books = [
    {id: 1, title: 'The Hobbit', author: 'J.R.R.'},
    {id: 2, title: 'The Lord of the Rings', author: 'J.R.R.'},
    {id: 3, title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Zaher'}
]

//GET Request (and optional limit param like '/books?limit=2')
app.get('/books', (req, res) => {
    const limit = parseInt(req.query.limit);
    if (limit && limit > 0 && limit <= books.length) {
        const limitedBooks = books.slice(0, limit);
        return res.json(limitedBooks);
    } else
        return res.json(books);
})

//GET with id
app.get('/books/:id', (req, res) => {
    const id = req.params.id;

    const book = books.find(book => book.id == id);
    if (book)
        return res.json(book);
    else
        return res.status(404).send('Book not found');
})

//POST Request
app.post('/books', (req, res) => {
    const book = req.body;
    if (book) {
        books.push(book);
        return res.status(201).send('Book Created Successfully');
    } else {
        return res.status(400).send('Invalid Book');
    }
})

//PUT Request
app.put('/books/:id', (req, res) => {
    const id = req.params.id;
    const index = books.findIndex(book => book.id == id);
    if (index > -1) {
        books[index] = req.body;
        return res.status(200).send('Book Updated Successfully');
    } else
        return res.status(404).send('Book not found');
})

//DELETE Request
app.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    const index = books.findIndex(book => book.id == id);
    if (index > -1) {
        books.splice(index, 1);
        return res.status(204).send('Book Deleted Successfully');
    } else
        return res.status(404).send('Book not found');
})
