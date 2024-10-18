const mongoose = require ('mongoose');

const commentSchema = new mongoose.Schema({
    message: String,
    time: Date,
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;