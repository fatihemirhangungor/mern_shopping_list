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

// UPDATE -> api/items/id
// Update an item
router.put('/:id', (req, res) => {
    const updatedItem = new Item({
        name: req.body.name
    });
    Item.findById(req.body.id)
    .then(item => item.name = updatedItem.name().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}));
});

// DELETE -> api/items/id
// Delete an item
router.delete('/:id', (req, res) => {
    Item.findById(req.body.id)
    .then(item => item.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}));
});

module.exports = router;