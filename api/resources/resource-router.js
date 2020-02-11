const router = require('express').Router();

const Resources = require('./resource-model');

router.get('/', (req, res) => {
    Resources.get()
        .then(list => res.status(200).json(list))
        .catch(err => res.status(500).json(err))
})

router.post('/', (req, res) => {
    Resources.insert(req.body)
        .then(added => res.status(201).json(added))
        .catch(err => res.status(500).json(err))
})

router.put('/:id', (req, res) => {
    const updates = req.body;
    Resources.update(req.params.id, updates)
        .then(ret => res.status(201).json(ret))
        .catch(err => res.status(500).json(err))
})

module.exports = router;
