const express = require("express");
const Item = require('../Model/itemSchema')
const router = express.Router();
const mongoose = require('mongoose');




router.post('/add', async (req, res, next) => {
    try {
        console.log('api hit');
        const { assets, last_trade, H_24, change } = req.body;
        const newItem = new Item({
            assets,
            last_trade,
            H_24,
            change
        });

        await newItem.save();
        res.status(201).json({ message: 'Item store successfully.', newItem, });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});



router.get('/GetAll', async (req, res, next) => {
    try {
        const allItems = await Item.find().sort({ date: 'asc' }); 

        res.status(200).json({ message: 'Itema retrieved successfully.', allItems });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});




module.exports = router;