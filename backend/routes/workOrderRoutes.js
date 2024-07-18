const express = require('express');
const router = express.Router();

const { WorkOrder, Building, User } = require('../models');

// Get all the work orders, 
// as well as the username that added each work order
// and the building where the event attached to the work order is taking place
router.get('/orders', async (req, res) => {

    try {
        const orders = await WorkOrder.findAll({
            include: [
                {
                    model: Building,
                    as: 'building',
                    attributes: ['name'],
                },
                {
                    model: User,
                    as: 'user',
                    attributes: ['username'],
                }
            ]
        });

        res.send(orders);

    } catch (error) {
        console.log(error);
        res.status(500).send({error: 'An error occured while retrieving work orders.'});
    }
});

module.exports = router;
