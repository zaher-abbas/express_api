const books = [
    {id: 1, title: 'The Hobbit', author: 'J.R.R.', category: 'fantasy'},
    {id: 2, title: 'The Lord of the Rings', author: 'J.R.R.', category: 'fantasy'},
    {id: 3, title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Zaher', category: 'sci-fi'},
    {id: 4, title: 'Alien Romulus', author: 'Marie', category: 'sci-fi'},

]

export const booksList = (req, res) => {
    const limit = parseInt(req.query.limit);
    const category = req.query.category;
    if (limit && limit > 0 && limit <= books.length) {
        const limitedBooks = books.slice(0, limit);
        return res.json(limitedBooks);
    } else if (category) {
        const filteredBooks = books.filter(book => book.category === category);
        return res.json(filteredBooks);
    } else
        return res.json(books);
}

export const bookDetail = (req, res) => {
    const id = req.params.id;

    const book = books.find(book => book.id == id);
    if (book)
        return res.json(book);
    else
        return res.status(404).send('Book not found');
}

export const createBook = (req, res) => {
    const book = req.body;
    if (book) {
        books.push(book);
        return res.status(201).json({message: 'Book Created Successfully', Book: book});
    } else {
        return res.status(400).send('Invalid Book');
    }
}

export const updateBook = (req, res) => {
    const id = req.params.id;
    const index = books.findIndex(book => book.id == id);
    if (index > -1) {
        books[index] = req.body;
        return res.status(200).json({message: 'Book Updated Successfully', Book: books[index]});
    } else
        return res.status(404).send('Book not found');
}

export const deleteBook = (req, res) => {
    const id = req.params.id;
    const index = books.findIndex(book => book.id == id);
    if (index > -1) {
        books.splice(index, 1);
        return res.status(204).json({message: 'Book Deleted Successfully'});
    } else
        return res.status(404).send('Book not found');
}