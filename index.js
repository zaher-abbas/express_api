import express from 'express';
import {booksList} from './BookController.js';
import {bookDetail} from "./BookController.js";
import {createBook} from "./BookController.js";
import {updateBook} from "./BookController.js";
import {deleteBook} from "./BookController.js";

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


//GET Request
app.get('/books', booksList)

//GET with id
app.get('/books/:id', bookDetail)

//POST Request
app.post('/books', createBook)

//PUT Request
app.put('/books/:id', updateBook)

//DELETE Request
app.delete('/books/:id', deleteBook)
