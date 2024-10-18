const express = require ('express');
const bodyParser = require ('body-parser');
const app = express();
const mongoose = require('mongoose');

const {addComment, getComments} = require('./commentsModule');




app.use (bodyParser.json());


const PORT = process.env.PORT || 3000;

app.listen (PORT, () => {

    console.log(`Server is running on port ${PORT}`);

});



mongoose.connect('mongodb://localhost:27017/social_feed', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error', error);

});

db.once('open', async() => {
    console.log('Connected to MongoDb');






app.get('/comments', async (req, res) => {
    try {
        const comments = await getComments(); 
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving comments', error });
    }
});

app.post('/comment', async (req, res) => {

    const { message } = req.body;
    try {
        const newComment = await addComment(message); 
     
        res.status(201).json(newComment);
    } catch (error) {
        console.error('Error adding comment:', error); 
        res.status(500).json({ message: 'Error adding comment', error });
    }
});
});