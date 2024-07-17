const express = require('express');
const router = express.Router();

const { WorkOrder } = require('../models');

// TODO: might add async to .get and .post???
router.get('/orders', (req, res) => {
    // WorkOrder.findAll().then((buildings) => {
    //     res.send(buildings);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });
});

module.exports = router;
