const router = require('express').Router();

const Projects = require('./project-model');

router.get('/', (req, res) => {
    Projects.get()
        .then(list => res.status(200).json(list))
        .catch(err => res.status(500).json(err))
});

router.get('/:id', (req, res) => {
    Projects.getById(req.params.id)
        .then(list => res.status(200).json(list))
        .catch(err => res.status(500).json(err))
});

router.get('/:id/details', (req, res) => {
    Projects.getDetails(req.params.id)
    .then(details => res.status(200).json(details))
    .catch(err => res.status(500).json(err))
})

router.post('/', (req, res) => {
    Projects.insert(req.body)
        .then(added => res.status(201).json(added))
        .catch(err => res.status(500).json(err))
});

module.exports = router;
