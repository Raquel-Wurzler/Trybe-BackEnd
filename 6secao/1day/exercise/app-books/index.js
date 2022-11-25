const express = require('express');
const app = express();
const routerBooks = require('./src/router/booksRouter');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/books', routerBooks);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));