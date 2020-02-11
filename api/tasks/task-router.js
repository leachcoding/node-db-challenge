const router = require('express').Router();

const Tasks = require('./tasks-model');

router.get('/', (req, res) => {
    Tasks.get()
        .then(list => res.status(200).json(list))
        .catch(err => res.status(500).json(err))
})

router.get('/:id', (req, res) => {
    Tasks.getById(req.params.id)
        .then(list => res.status(200).json(list))
        .catch(err => res.status(500).json(err))
})

router.post('/', (req, res) => {
    Tasks.insert(req.body)
        .then(added => res.status(201).json(added))
        .catch(err => res.status(500).json(err))
})

module.exports = router;
