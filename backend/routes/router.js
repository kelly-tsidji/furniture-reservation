const express = require('express');
const router = express.Router();

const { Building } = require('../models');

router.get('/models', (req, res) => {
    res.send(Building);
});

router.get('/built', (req, res) => {
    Building.findAll().then((buildings) => {
        res.send(buildings)
    })
});


module.exports = router;
