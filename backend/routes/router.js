// TODO: delete later

const express = require('express');
const router = express.Router();

const { Building } = require('../models');

// TODO: might add async to .get and .post???
router.get('/built', (req, res) => {
    Building.findAll().then((buildings) => {
        res.send(buildings);
    })
    .catch((err) => {
        console.log(err);
    });
});

module.exports = router;
