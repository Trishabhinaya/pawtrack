const express = require('express');
const router = express.Router();
const Adoption = require('../models/Adoption');

router.post('/', async (req, res) => {
    try {
        const newAdoption = new Adoption(req.body);
        await newAdoption.save();
        res.status(201).send("✅ Adoption request saved");
    } catch (err) {
        res.status(500).send("❌ Error saving adoption request");
    }
});

module.exports = router;
