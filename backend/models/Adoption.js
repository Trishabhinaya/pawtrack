const mongoose = require('mongoose');

const AdoptionSchema = new mongoose.Schema({
    pet: String,
    adopterName: String,
    email: String,
    phone: String,
    address: String,
    reason: String,
    submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Adoption', AdoptionSchema);
