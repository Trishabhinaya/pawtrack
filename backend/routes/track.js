const express = require('express');
const router = express.Router();
const Track = require('../models/Track');

router.post('/', async (req, res) => {
    try {
        const newTrack = new Track(req.body);
        await newTrack.save();
        res.status(201).send("✅ Tracking request saved");
    } catch (err) {
        res.status(500).send("❌ Error saving tracking request");
    }
});

module.exports = router;
