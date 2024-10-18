const Comment = require('./comment');


const addComment = (message) => {
    const newComment = new Comment({
        message: message,
        time: new Date()
    });
    return newComment.save();
};


const getComments = () => {
    return Comment.find({});
};

module.exports = {
    addComment,
    getComments
};