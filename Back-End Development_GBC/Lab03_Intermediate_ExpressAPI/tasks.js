const express = require('express');

const router = express.Router();

const tasks =[];

router.use((req, res, next) => {

    console.log(`S\${req.method} ${req.url}`);
    next();

});

router.get('/', (req,res)=> {

    res.json(tasks);

});

router.post('/', (req,res)=> {

    const {title, description} = req.body;
    const task = {title, description};
    tasks.push(task);
    res.status(201).json(task);
});


router.put('/:index', (req, res) => {
    const { index } = req.params;
    const { title, description } = req.body;

    if (tasks[index]) {
        tasks[index] = { title, description }; 
        res.json(tasks[index]);
    } else {
        res.status(404).json({ error: "Task not found" });
    }
});


router.delete('/:index', (req, res) => {
    const { index } = req.params;

    if (tasks[index]) {
        const deletedTask = tasks.splice(index, 1); 
        res.json(deletedTask);
    } else {
        res.status(404).json({ error: "Task not found" });
    }
});

module.exports = router;