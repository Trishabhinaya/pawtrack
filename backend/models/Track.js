const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema({
    name: String,
    age: String,
    breed: String,
    location: String,
    state: String,
    health: String,
    inShelter: String,
    contact: String,
    submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Track', TrackSchema);
