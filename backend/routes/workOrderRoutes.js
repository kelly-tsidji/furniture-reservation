const express = require('express');
const router = express.Router();

const { Op } = require('sequelize');
const { WorkOrder, Building, User } = require('../models');

// Get all the work orders that are currently happening or will happen in the future
// as well as the username that added each work order
// and the building where the event attached to the work order is taking place
// NOTE: the work orders are sorted by their date
router.get('/recent-orders', async (req, res) => {

    try {
        const orders = await WorkOrder.findAll({
            where: {
                endDate: { [Op.gte]: new Date() }
            },
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
            ],
            order: [
                ['startDate', 'ASC'],
                ['endDate', 'ASC']
            ]
        });

        res.send(orders);

    } catch (error) {
        console.log(error);
        res.status(500).send({error: 'An error occured while retrieving work orders.'});
    }
});

module.exports = router;
