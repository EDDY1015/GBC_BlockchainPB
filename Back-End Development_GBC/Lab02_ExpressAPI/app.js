const express = require('express');
const app = express();
const port = 3000;
const books = require('./books');

app.use(express.json());
app.get('/api/books', (req,res) => {
    console.log("GET request received");
    res.json(books);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});