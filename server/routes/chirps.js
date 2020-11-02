const express = require('express');
const chirpsStore = require('../chirpstore');
let router = express.Router();

router.get('/:id?', (req, res) => {
    if(req.params.id) {
        res.json(chirpsStore.GetChirp(id));
    } else {
        res.send(chirpsStore.GetChirps());
    }
});

router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id?', (req, res) => {
    res.json('Editing  ' + req.params.id);
});

router.delete('/:id?', (req, res) => {
    res.json('Deleting ' + req.params.id);
});

module.exports = router;
