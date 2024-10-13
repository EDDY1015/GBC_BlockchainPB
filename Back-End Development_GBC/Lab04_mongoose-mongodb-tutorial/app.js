const mongoose = require('mongoose');
const User = require('./user');

mongoose.connect('mongodb://localhost:27017/testdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error', error);

});

db.once('open', async() => {
    console.log('Connected to MongoDb');




try {
    const newUser = new User ({
        name: 'John Doe',
        email: 'john@example.com',
        age: 30,

    });

    await newUser.save();

    console.log('User saved successfulyy');

} catch (error) {

    console.error('Error saving user:', error);
} finally {
    mongoose.connection.close();

}

});