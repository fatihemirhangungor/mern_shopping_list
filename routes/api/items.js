const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Item');

// GET -> api/items
// Get all items
router.get('/', (req, res) => {
    Item.find()
        .sort( { date: -1 } )
        .then(items => res.json(items));
});

// POST -> api/items
// Create an item
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save()
        .then(item => res.json(item));
});

module.exports = router;