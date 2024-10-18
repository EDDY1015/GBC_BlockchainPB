const express = require ('express');

const router = express.Router();

const tasks = [];

router.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();

});

router.get('/', (req,res) => {
    res.json(tasks);

});

router.post('/', (req, res) => {
    const {message, time} = req.body;
    const task = (message, time);
    tasks.push(task);
    res.status(201).json(task);
});

module.exports = router;