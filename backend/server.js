const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://trisha:Trisha123@cluster0.zxtbaga.mongodb.net/pawtrack')

.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.log("❌ MongoDB error:", err));

// Routes (we’ll create these next)
const adoptRoutes = require('./routes/adopt');
const trackRoutes = require('./routes/track');

app.use('/adopt', adoptRoutes);
app.use('/track', trackRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
